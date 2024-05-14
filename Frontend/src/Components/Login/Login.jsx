import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext/AuthContext";
import './Login.css'; 
import LogoDocmeSVG from '../../assets/img/logo_docme.svg'; 

function LoginForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errMsg, setErrMsg] = useState("");
    const [loading, setLoading] = useState(false); // Agregar estado de carga

    const { setIsLoggedIn, userRole } = useContext(AuthContext);
    const navigate = useNavigate();
    const dashboardPath = `/DocMe/${userRole}/dashboard`;
    const handleLogin = async (event) => {
        event.preventDefault();
        setLoading(true); // Iniciar la carga

        try {
            const response = await fetch("http://localhost:5000/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify({ username, password }),
            });

            if (response.ok) {
                setIsLoggedIn(true);
                setLoading(false); // Finalizar la carga
                navigate(dashboardPath);
            } else {
                const errorMsg = await response.text();
                setErrMsg(errorMsg);
                setLoading(false); // Finalizar la carga
            }
        } catch (error) {
            console.error("Error de inicio de sesión:", error);
            setErrMsg("Error al iniciar sesión, intente de nuevo");
            setLoading(false); // Finalizar la carga
        }
    };

    return (
        <div className="containerForm">
            <img src={LogoDocmeSVG} alt="Logo DocMe" className="img-fluid logoIMG" />
            <div className="contentLogin">
                <form className="FormLogin" onSubmit={handleLogin}>
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
                                id="inputLogin"
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
                                id="inputLogin"
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

