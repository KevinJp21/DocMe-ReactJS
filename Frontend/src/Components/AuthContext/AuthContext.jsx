import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userRole, setUserRole] = useState(null);
    const [userName, setUserName] = useState(""); // Estado para almacenar el nombre del usuario
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkSession = async () => {
            try {
                const response = await fetch('http://localhost:5000/check-session', {
                    method: 'GET',
                    credentials: 'include'
                });
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setIsLoggedIn(data.isLoggedIn);
                setUserRole(data.role);
                setUserName(data.username); // Asegúrate de que tu API devuelva el nombre
            } catch (error) {
                console.error('Failed to check session:', error);
                setIsLoggedIn(false);
                setUserRole(null);
                setUserName(""); // Resetear el nombre si hay un error
            } finally {
                setLoading(false);
            }
        };

        checkSession();
    }, []);

    // Incluir todos los setters en el valor proporcionado por el Provider
    return (
        <AuthContext.Provider value={{
            isLoggedIn, setIsLoggedIn,
            userRole, setUserRole,
            userName, setUserName,
            loading, setLoading
        }}>
            {children}
        </AuthContext.Provider>
    );
};
