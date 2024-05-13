import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthContext/AuthContext';

function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { isLoggedIn, setIsLoggedIn, username: userContextUsername } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify({ username, password })
            });

            if (response.ok) {
                const data = await response.json();
                setIsLoggedIn(true); // Asegúrate de que esta función es proporcionada por el AuthContext
                navigate('/dashboard');
            } else {
                throw new Error('Failed to login');
            }
        } catch (error) {
            console.error('Error de inicio de sesión:', error);
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <input
                type="text"
                value={username}
                onChange={e => setUsername(e.target.value)}
                placeholder="Usuario"
            />
            <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Contraseña"
            />
            <button type="submit">Iniciar sesión</button>
        </form>
    );
}

export default LoginForm;
