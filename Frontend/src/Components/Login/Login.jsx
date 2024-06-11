import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext/AuthContext";
import './Login.css';
import LogoDocmeSVG from '../../assets/img/DocMe_logo.png';
import { Link } from "react-router-dom";

function LoginForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errMsg, setErrMsg] = useState("");
    const [loading, setLoading] = useState(false);

    const { setIsLoggedIn, setUserRole, setUserID, isLoggedIn, userRole } = useContext(AuthContext);
    const navigate = useNavigate();

    // Observamos los cambios en isLoggedIn y userRole
    useEffect(() => {
        if (isLoggedIn && userRole) {
            navigate(`/DocMe/${userRole}/dashboard`);
        }
    }, [isLoggedIn, userRole, navigate]);

    const handleLogin = async (event) => {
        event.preventDefault();
        setLoading(true);
        setErrMsg("");
    
        try {
            const response = await fetch("http://localhost:5000/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify({ username, password }),
            });
    
            const data = await response.json();
    
            if (response.ok) {
                setIsLoggedIn(true);
                setUserRole(data.user.role);
                setUserID(data.user.id); // Ajustar el ID de usuario también
            } else {
                setErrMsg(data.message || "Error al iniciar sesión");
            }
        } catch (error) {
            console.error("Error de inicio de sesión:", error);
            setErrMsg("Error al iniciar sesión, intente de nuevo");
        } finally {
            setLoading(false);
        }
    };
    
    

    return (
        <div className="containerForm">
            <img src={LogoDocmeSVG} alt="Logo DocMe" className="img-fluid logoIMG" />
            <div className="contentLogin">
                <form className="FormLogin" onSubmit={handleLogin}>
                    {errMsg && <div style={{ color: "#FF0000", textAlign: "left", fontSize: "20px" }}>{errMsg}</div>}
                    {loading && <div>Espere un momento...</div>}
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
                                id="inputLoginUser"
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
                                id="inputLoginPass"
                            />
                        </div>
                    </div>
                    <button className="btn btnLogin" type="submit" disabled={loading}>Iniciar sesión</button>
                    <a className="link" href="/recovery_pass">¿Olvidaste tu contraseña?</a>
                    <span>¿No tienes cuenta? <Link className="signUp" to="/DocMe/signup">Regístrate aquí</Link></span>
                </form>
            </div>
        </div>
    );
}

export default LoginForm;
