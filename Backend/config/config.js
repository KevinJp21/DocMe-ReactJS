const mysql = require('mysql');
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);
require('dotenv').config();

// Configuración de conexión a la base de datos MySQL
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
});

db.connect(err => {
  if (err) {
    console.error('Error connecting: ' + err.stack);
    return;
  }
  console.log('Connected as id ' + db.threadId);
});

// Configuración de express-mysql-session para manejar las sesiones en MySQL
const sessionStore = new MySQLStore({
  expiration: 86400000, // Tiempo de expiración de la sesión (en milisegundos, por ejemplo, 1 día)
  createDatabaseTable: true, // Crear la tabla de sesiones si no existe
  schema: {
    tableName: 'sessions', // Nombre de la tabla de sesiones en la base de datos
    columnNames: {
      session_id: 'session_id',
      expires: 'expires',
      data: 'data'
    }
  }
}, db);

module.exports = {
  db,
  sessionStore
};
