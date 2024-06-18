import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext/AuthContext";
import './Login.css';
import Assets from "../../assets/Assets";
import { Link } from "react-router-dom";
import VariablesEnv from "../AuthContext/VariablesEnv";

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
            navigate(`/${userRole}/dashboard`);
        }
    }, [isLoggedIn, userRole, navigate]);

    const handleLogin = async (event) => {
        event.preventDefault();
        setLoading(true);
        setErrMsg("");

        try {
            const response = await fetch(`${VariablesEnv.backendURL}/login`, {
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
        <div className="containerFormLogin" style={{ backgroundImage: `url(${Assets.images.HomeBG})` }}>
            <div className="LoginWrapper">
                <div className="LoginHeader">
                    <img src={Assets.logos.LogoDocMe} alt="Logo DocMe" className="logoIMG" width="234px" height="100px" />
                    <h3>Bienvenido a DocMe</h3>
                    {errMsg && <div style={{ color: "#FF0000", textAlign: "center", fontSize: "15px", fontWeight: "400", textWrap:"pretty"}}>{errMsg}</div>}
                    
                </div>
                <div className="contentLogin">
                    <form className="FormLogin" onSubmit={handleLogin}>
                      
                        <div className="contentInputLogin ">
                            <label htmlFor="name" title="Usuario">Usuario</label>
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
                        <div className="contentInputLogin">
                        <label htmlFor="password" title="Correo electrónico">Contraseña</label>
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
                    </form>
                </div>
                <div className="LoginFooter">
                    <Link className="link" to="/recovery_pass">¿Olvidaste tu contraseña?</Link>
                    <span>¿No tienes cuenta? <Link className="signUp" to="/signup">Regístrate aquí</Link></span>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;
