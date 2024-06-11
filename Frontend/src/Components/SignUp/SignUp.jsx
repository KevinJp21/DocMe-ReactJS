import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';
import LogoDocmeSVG from '../../assets/img/DocMe_logo.png';

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
            alert('Las contraseñas deben ser iguales en ambos campos.');
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
            const response = await fetch('http://localhost:5000/signup', {
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

            console.log('Registro exitoso:', data);
            navigate('/login');
        } catch (error) {
            console.error('Error de registro:', error);
            setErrMsg(error.message);
        }
    };

    return (
        <div className="containerSignUp">
            <img className="img-fluid logoIMG" src={LogoDocmeSVG} alt="Logo DocMe" />
            <div className="SignUpContent">
                <form onSubmit={handleSignUp} className='SignUpForm'>
                    <h3>Registro</h3>
                    {errMsg && <div style={{ color: '#FF0000', textAlign: 'center', fontSize: '20px' }}>{errMsg}</div>}
                    <div className="row">
                        <div className="col-md-6">
                            <div className="SignUpInput">
                                <div className="div">
                                    <input type="text" name="name" value={formData.name} onChange={handleChange} autoComplete="off" placeholder="Nombre" />
                                </div>
                            </div>

                            <div className="SignUpInput">
                                <div className="div">
                                    <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} autoComplete="off" placeholder="Apellido" />
                                </div>
                            </div>

                            <div className="SignUpInput">
                                    <div className="div">
                                        <input type="text" name="userName" value={formData.userName} onChange={handleChange} autoComplete="off" placeholder="Nombre de usuario" />
                                    </div>
                                </div>

                                <div className="SignUpInput">
                                    <div className="div">
                                        <input type="text" name="phoneNum" value={formData.phoneNum} onChange={handleChange} autoComplete="off" placeholder="Numero de celular" />
                                    </div>
                                </div>

                                                               
                                <div className="SignUpInput">
                                    <div className="div">
                                        <input type="date" name="birthDate" value={formData.birthDate} onChange={handleChange} />
                                    </div>
                                </div>
                        </div>
                        <div className="col-md-6">
                            <div className="SignUpInput">
                                <div className="div">
                                    <input type="text" name="ID" value={formData.ID} onChange={handleChange} autoComplete="off" placeholder="Identificacion" />
                                </div>
                            </div>
                            <div className="SignUpInput">
                                <div className="div">
                                    <input type="email" name="email" value={formData.email} onChange={handleChange} autoComplete="off" placeholder="Correo" />
                                </div>
                            </div>
                            <div className="col-md-6 ContentPassword">
                                <div className="SignUpInput">
                                    <div className="div">
                                        <input type="password" name="password" value={formData.password} onChange={handleChange} autoComplete="off" placeholder="Contraseña" />
                                    </div>
                                </div>
                                <div className="SignUpInput">
                                    <div className="div">
                                        <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} autoComplete="off" placeholder="Confirmar contraseña" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="SignUpBTN mb-4">
                            <button className="btn" type="submit">Registrarse</button>
                        </div>
                        <a className="link" href="../frontend/recovery_pass.php">¿Olvidaste tu contraseña?</a>
                        <span>¿Ya tienes cuenta? <a className="link" href="../index.php"> Inicia Sesión</a></span>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignUp;