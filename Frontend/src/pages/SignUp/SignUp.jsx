import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';
import LogoDocMe from "../../assets/img/DocMe_logo.webp";
import HomeBG from "../../assets/img/DocMe_Home BG.webp";
import { Link } from 'react-router-dom';
import VariablesEnv from '../../components/AuthContext/variablesEnv';

function SignUp() {
    const [formData, setFormData] = useState({
        name: '',
        lastName: '',
        ID: '',
        email: '',
        password: '',
        confirmPassword: '',
        userName: '',
        phoneNum: '',
        birthDate: ''
    });
    const [errMsg, setErrMsg] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const validatePasswords = () => {
        if (formData.password !== formData.confirmPassword) {
            setErrMsg('Las contraseñas deben ser iguales en ambos campos.');
            return false;
        }
        return true;
    };

    const handleSignUp = async (event) => {
        event.preventDefault();
        if (!validatePasswords()) {
            return;
        }

        try {
            const response = await fetch(`${VariablesEnv.backendURL}/signup`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Error al registrar usuario');
            }
            navigate('/login');
        } catch (error) {
            setErrMsg(error.message);
        }
    };

    return (
        <div className="containerFormSignUp" style={{ backgroundImage: `url(${HomeBG})` }}>
            <div className="SignUpWrapper">
                <div className="HeaderSignUp">
                    <img className="logoIMG" src={LogoDocMe} alt="Logo DocMe" />
                    <h3>Crea tu cuenta</h3>
                    {errMsg && <div style={{ color: "#FF0000", textAlign: "center", fontSize: "15px", fontWeight: "400", textWrap: "pretty" }}>{errMsg}</div>}
                </div>
                <div className="ContentSignUp">
                    <form onSubmit={handleSignUp} className='FormSignUp'>
                        <div className="SignUpInput">
                            <div className="InputContent">
                                <label htmlFor="firstname" title="Nombre">Nombre</label>
                                <input type="text" name="name" value={formData.name} onChange={handleChange} autoComplete="off" placeholder="Nombre" />
                            </div>
                        </div>

                        <div className="SignUpInput">
                            <div className="InputContent">
                                <label htmlFor="lastname" title="Apellido">Apellido</label>
                                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} autoComplete="off" placeholder="Apellido" />
                            </div>
                        </div>

                        <div className="SignUpInput">
                            <div className="InputContent">
                                <label htmlFor="username" title="Nombre de usuario">Nombre de usuario</label>
                                <input type="text" name="userName" value={formData.userName} onChange={handleChange} autoComplete="off" placeholder="Nombre de usuario" />
                            </div>
                        </div>

                        <div className="SignUpInput">
                            <div className="InputContent">
                                <label htmlFor="phonenumber" title="Numero de telefono">Numero de telefono</label>
                                <input type="text" name="phoneNum" value={formData.phoneNum} onChange={handleChange} autoComplete="off" placeholder="Numero de celular" />
                            </div>
                        </div>


                        <div className="SignUpInput">
                            <div className="InputContent">
                                <label htmlFor="birthDate" title="Fecha de nacimiento">Fecha de nacimiento</label>
                                <input type="date" id="birthDate" name="birthDate" value={formData.birthDate} onChange={handleChange} />
                            </div>
                        </div>

                        <div className="SignUpInput">
                            <div className="InputContent">
                                <label htmlFor="id" title="Identificación">Identificación</label>
                                <input type="text" name="ID" value={formData.ID} onChange={handleChange} autoComplete="off" placeholder="Identificación" />
                            </div>
                        </div>
                        <div className="SignUpInput email">
                            <div className="InputContent email">
                                <label htmlFor="email" title="Correo">Correo</label>
                                <input type="email" name="email" value={formData.email} onChange={handleChange} autoComplete="off" placeholder="Correo" />
                            </div>
                        </div>
                        <div className="SignUpInput">
                            <div className="InputContent">
                                <label htmlFor="password" title="Correo">Contraseña</label>
                                <input type="password" name="password" value={formData.password} onChange={handleChange} autoComplete="off" placeholder="Contraseña" />
                            </div>
                        </div>
                        <div className="SignUpInput">
                            <div className="InputContent">
                                <label htmlFor="password" title="Confirmar contraseña">Confirmar contraseña</label>
                                <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} autoComplete="off" placeholder="Confirmar contraseña" />
                            </div>
                        </div>
                        <button className="btnSignUp" type="submit">Registrarse</button>
                    </form>
                    
                </div>
                <div className="FooterSignUp">
                    <Link className="link" to="/recoveryPassword">¿Olvidaste tu contraseña?</Link>
                    <span>¿Ya tienes cuenta? <Link className="link" to="/login"> Inicia Sesión</Link></span>
                </div>
            </div>
        </div>
    );
}

export default SignUp;