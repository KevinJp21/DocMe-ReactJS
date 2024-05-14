import { useContext } from 'react';
import { AuthContext } from '../AuthContext/AuthContext';
import { useNavigate } from 'react-router-dom';

export const useLogout = () => {
    const { setIsLoggedIn } = useContext(AuthContext);
    const navigate = useNavigate();

    const logout = async () => {
        const response = await fetch('http://localhost:5000/logout', {
            method: 'POST',
            credentials: 'include',
        });

        if (response.ok) {
            setIsLoggedIn(false);
            navigate('/DocMe/login');
        } else {
            console.error('Failed to logout');
        }
    };

    return logout;
}
