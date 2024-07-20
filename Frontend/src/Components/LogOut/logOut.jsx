import { useContext } from 'react';
import { AuthContext } from '../Hooks/AuthContext';
import { useNavigate } from 'react-router-dom';
import VariablesEnv from '../Hooks/variablesEnv';

export const useLogout = () => {
    const { setIsLoggedIn } = useContext(AuthContext);
    const navigate = useNavigate();

    const logout = async () => {
        const response = await fetch(`${VariablesEnv.backendURL}/logout`, {
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
