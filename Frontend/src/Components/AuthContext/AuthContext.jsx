import React, { createContext, useState, useEffect } from 'react';
import VariablesEnv from './variablesEnv';
export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userID, setUserID] = useState(null);
    const [userRole, setUserRole] = useState(null);
    const [userName, setUserName] = useState("");
    const [loading, setLoading] = useState(true);
    const [userData, setUserData] = useState(null);



    useEffect(() => {
        const checkSession = async () => {
            setLoading(true);
            try {
                const sessionResponse = await fetch(`${VariablesEnv.backendURL}/check-session`, {
                    method: 'GET',
                    credentials: 'include'
                });
                if (!sessionResponse.ok) {
                    throw new Error(`HTTP error! status: ${sessionResponse.status}`);
                }
                const sessionData = await sessionResponse.json();
                setIsLoggedIn(sessionData.isLoggedIn);
                setUserID(sessionData.userID);
                setUserRole(sessionData.role);

                // Si el usuario está autenticado, entonces carga los datos del usuario
                if (sessionData.isLoggedIn) {
                    const userResponse = await fetch(`${VariablesEnv.backendURL}/user-details`, {
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
                setUserID(null);
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
            userID, setUserID,
            userName, setUserName,
            loading, setLoading,
            userData, setUserData
        }}>
            {children}
        </AuthContext.Provider>
    );
};
