import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext/AuthContext";
<<<<<<< HEAD
import './Login.css'; 
import LogoDocmeSVG from '../../assets/img/logo_docme.svg'; 
=======
import './Login.css';
import LogoDocmeSVG from '../../assets/img/logo_docme.svg';
>>>>>>> 3291f9c54b108cf24829dc43e0f5de56b5fd7bf9

function LoginForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errMsg, setErrMsg] = useState("");
    const [loading, setLoading] = useState(false);

    const { setIsLoggedIn, setUserRole, isLoggedIn, userRole } = useContext(AuthContext);
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
    
            const data = await response.json(); // Aquí se recibe la respuesta JSON
    
            if (response.ok) {
                setIsLoggedIn(true);
                setUserRole(data.user.role); // Extraemos el role desde user.role
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
                    {loading && <div>Cargando...</div>}
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
                    <button className="btn btnLogin" type="submit" disabled={loading}>Iniciar sesión</button>
                    <a className="link" href="/recovery_pass">¿Olvidaste tu contraseña?</a>
                    <span>¿No tienes cuenta? <a className="signUp" href="/signup">Regístrate aquí</a></span>
                </form>
            </div>
        </div>
    );
}

export default LoginForm;
