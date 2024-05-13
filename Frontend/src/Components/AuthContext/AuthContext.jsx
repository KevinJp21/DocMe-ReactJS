import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado para autenticar el login
    const [userRole, setUserRole] = useState(null); // Estado para almacenar el rol del usuario
    const [loading, setLoading] = useState(true); // Estado para manejar el loading de la autenticación

    useEffect(() => {
        const checkSession = async () => {
            try {
                const response = await fetch('http://localhost:5000/check-session', {
                    method: 'GET',
                    credentials: 'include' // Importante para cookies
                });
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setIsLoggedIn(data.isLoggedIn);
                setUserRole(data.role); // Actualizar el estado con el rol del usuario
            } catch (error) {
                console.error('Failed to check session:', error);
                setIsLoggedIn(false);
                setUserRole(null); // Asegurar que el rol se resetea si hay un error
            } finally {
                setLoading(false); // Establece el loading a false cuando termina la verificación
            }
        };

        checkSession();
    }, []);

    return (
        <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, userRole, loading }}>
            {children}
        </AuthContext.Provider>
    );
};
