import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userRole, setUserRole] = useState(null);
    const [userName, setUserName] = useState("");
    const [loading, setLoading] = useState(true);
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const checkSession = async () => {
            setLoading(true);
            try {
                const sessionResponse = await fetch('http://localhost:5000/check-session', {
                    method: 'GET',
                    credentials: 'include'
                });
                if (!sessionResponse.ok) {
                    throw new Error(`HTTP error! status: ${sessionResponse.status}`);
                }
                const sessionData = await sessionResponse.json();
                setIsLoggedIn(sessionData.isLoggedIn);
                setUserRole(sessionData.role);

                // Si el usuario está autenticado, entonces carga los datos del usuario
                if (sessionData.isLoggedIn) {
                    const userResponse = await fetch('http://localhost:5000/user-details', {
                        credentials: 'include'
                    });
                    if (!userResponse.ok) {
                        throw new Error(`HTTP error! status: ${userResponse.status}`);
                    }
                    const userData = await userResponse.json();
                    setUserData(userData);
                } else {
                    setUserData(null);
                }
            } catch (error) {
                console.error('Failed to load data:', error);
                setIsLoggedIn(false);
                setUserRole(null);
                setUserData(null); 
            } finally {
                setLoading(false);
            }
        };

        checkSession();
    }, []);

    return (
        <AuthContext.Provider value={{
            isLoggedIn, setIsLoggedIn,
            userRole, setUserRole,
            userName, setUserName,
            loading, setLoading,
            userData, setUserData
        }}>
            {children}
        </AuthContext.Provider>
    );
};
