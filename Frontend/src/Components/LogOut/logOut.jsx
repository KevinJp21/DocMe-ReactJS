import { useContext } from 'react';
import { AuthContext } from '../AuthContext/AuthContext';
import { useNavigate } from 'react-router-dom';

export const useLogout = () => {
    const { setIsLoggedIn } = useContext(AuthContext);
    const navigate = useNavigate();

    const logout = async () => {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/logout`, {
            method: 'POST',
            credentials: 'include',
        });

        if (response.ok) {
            setIsLoggedIn(false);
            navigate('/home');
        } else {
            console.error('Failed to logout');
        }
    };

    return logout;
}
