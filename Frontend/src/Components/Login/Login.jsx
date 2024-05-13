import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext/AuthContext";
import './Login.css'; // Asegúrate de que los estilos en este archivo correspondan a los del CSS original
import LogoDocmeSVG from '../../assets/img/logo_docme.svg'; // Asegúrate de que la ruta es correcta

function LoginForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errMsg, setErrMsg] = useState(""); // Estado para manejar mensajes de error

    const { setIsLoggedIn } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch("http://localhost:5000/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify({ username, password }),
            });

            if (response.ok) {
                setIsLoggedIn(true);
                navigate("/dashboard");
            } else {
                const errorMsg = await response.text();
                setErrMsg(errorMsg);
            }
        } catch (error) {
            console.error("Error de inicio de sesión:");
            setErrMsg("Error al iniciar sesión, intente de nuevo");
        }
    };

    return (
        <div className="containerForm">
            <img src={LogoDocmeSVG} alt="Logo DocMe" className="img-fluid logoIMG" />
            <div className="contentLogin">
                <form onSubmit={handleLogin}>
                    {errMsg && <div style={{ color: "#FF0000", textAlign: "left", fontSize: "20px" }}>{errMsg}</div>}
                    <h3>Bienvenido a DocMe</h3>
                    <div className="contentInputLogin ">
                        <div className="BodyInput">
                            <input
                                type="text"
                                name="user_name"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                autoComplete="off"
                                placeholder="Usuario"
                            />
                        </div>
                    </div>
                    <div className="contentInputLogin mb-5">
                        <div className="BodyInput">
                            <input
                                type="password"
                                name="pass"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                placeholder="Contraseña"
                                autoComplete="current-password"
                            />
                        </div>
                    </div>
                    <button className="btn btnLogin" type="submit">Iniciar sesión</button>
                    <a className="link" href="/recovery_pass">¿Olvidaste tu contraseña?</a>
                    <span>¿No tienes cuenta? <a className="signUp" href="/signup">Regístrate aquí</a></span>
                </form>
            </div>
        </div>
    );
}

export default LoginForm;

