import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

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
              if (data.isLoggedIn) {
                  setIsLoggedIn(true);
              } else {
                  setIsLoggedIn(false);
              }
          } catch (error) {
              console.error('Failed to check session:', error);
          }
      };
  
      checkSession();
  }, []);

    return (
        <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
            {children}
        </AuthContext.Provider>
    );
};
