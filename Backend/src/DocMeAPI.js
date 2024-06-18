const express = require("express");
const cors = require("cors");
const { db, sessionStore } = require("../config/config"); // Ajusta la ruta según sea necesario
const cookieParser = require("cookie-parser");
const session = require("express-session");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const isProduction = process.env.NODE_ENV === "production";
const frontendURL = isProduction
  ? process.env.FRONTEND_URL_PROD
  : process.env.FRONTEND_URL_DEV;

app.use(express.json());
app.use(
  cors({
    origin: [frontendURL], // Asegúrate de ajustar esto según el dominio de tu frontend
    credentials: true, // Permitir cookies
  })
);
app.use(cookieParser());

app.use(
  session({
    key: "docme",
    secret: "secret",
    store: sessionStore,
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: isProduction,
      httpOnly: true,
      maxAge: 86400000, // Ejemplo: expira en 1 día
    },
  })
);

app.get("/check-session", (req, res) => {
  if (req.session.userId) {
    res.json({
      isLoggedIn: true,
      role: req.session.userRole,
    });
  } else {
    res.json({ isLoggedIn: false });
  }
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).send("Username and password are required");
  }

  const sql = `SELECT ID_Usu, u.User_Name, u.Password, r.Rol FROM usuarios u JOIN roles r ON r.ID_Rol = u.ID_Rol WHERE User_Name = ?`;
  db.query(sql, [username], (err, result) => {
    if (err) throw err;
    if (result.length === 0) {
      return res.status(401).send("Usuario o contraseña incorrectos");
    }

    const user = result[0];
    if (password === user.Password) {
      req.session.userId = user.ID_Usu;
      req.session.username = username;
      req.session.userRole = user.Rol; // Asegúrate de que este valor se está asignando correctamente
      res.json({
        message: "Login successful",
        user: {
          id: user.ID_Usu,
          username,
          role: user.Rol,
        },
      });
    } else {
      res.status(401).send("Usuario o contraseña incorrectos");
    }
  });
});

app.post("/logout", (req, res) => {
  if (req.cookies.docme) {
    const sql = `DELETE FROM sessions WHERE JSON_CONTAINS(data, '{"userId":?}');`;
    db.query(sql, [req.session.userId]);
  }
  req.session.destroy((err) => {
    if (err) {
      // Manejar el error si la sesión no se puede destruir
      console.error("Failed to destroy session:", err);
      res.status(500).send("Could not log out");
    } else {
      res.clearCookie("docme", { path: "/" });
      res.send({ isLoggedIn: false });
    }
  });
});

app.post("/signup", (req, res) => {
  const {
    name,
    lastName,
    email,
    password,
    userName,
    birthDate,
    phoneNum,
    ID,
    role = 2,
  } = req.body;

  if (
    !name ||
    !lastName ||
    !email ||
    !password ||
    !userName ||
    !birthDate ||
    !phoneNum ||
    !ID
  ) {
    return res.status(400).json({ message: "Todos los campos son requeridos" });
  }

  // Calcular la edad
  const birthday = new Date(birthDate);
  const ageDiff = Date.now() - birthday.getTime();
  const ageDate = new Date(ageDiff);
  const age = Math.abs(ageDate.getUTCFullYear() - 1970);

  // Verificar si el usuario es menor de 18 años
  if (age < 18) {
    return res
      .status(400)
      .json({ message: "Debes tener al menos 18 años para registrarte" });
  }

  const sqlCheck = `SELECT * FROM usuarios WHERE User_Name = ? OR Correo = ? OR Identificacion = ?`;
  db.query(sqlCheck, [userName, email, ID], (err, result) => {
    if (err) {
      console.error("Database error:", err);
      return res
        .status(500)
        .json({ error: "Internal server error checking user existence" });
    }
    if (result.length > 0) {
      return res.status(409).json({
        message: "El nombre de usuario, correo o identificación ya está en uso",
      });
    }

    const sqlInsert = `INSERT INTO usuarios (Nombre, Apellido, Correo, Password, User_Name, FechaNac, Telefono, Identificacion, ID_Rol) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    db.query(
      sqlInsert,
      [name, lastName, email, password, userName, birthday, phoneNum, ID, role],
      (error, results) => {
        if (error) {
          console.error("Database error:", error);
          return res
            .status(500)
            .json({ error: "Internal server error creating user" });
        }
        res.status(201).json({ message: "Usuario registrado con éxito" });
      }
    );
  });
});

app.get("/user-details", (req, res) => {
  if (!req.session.userId) {
    return res.status(403).json({ error: "No authenticated user" });
  }

  const sql = `SELECT * FROM usuarios WHERE ID_Usu = ?`;
  db.query(sql, [req.session.userId], (err, result) => {
    if (err) {
      console.error("Database error:", err);
      return res.status(500).json({ error: "Internal server error" });
    }
    if (result.length === 0) {
      return res.status(404).json({ error: "User not found" });
    }

    const user = result[0];
    res.json({
      id: user.ID_Usu,
      username: user.User_Name,
      role: user.Rol,
      name: user.Nombre,
      lastName: user.Apellido,
    });
  });
});

module.exports = app;
