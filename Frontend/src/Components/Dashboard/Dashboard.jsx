import React, { useContext } from 'react';
import { AuthContext } from '../AuthContext/AuthContext';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const { setIsLoggedIn, userRole } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = async () => {
        const response = await fetch('http://localhost:5000/logout', {
            method: 'POST',
            credentials: 'include', // Importante para manejar las cookies de sesión
        });

        if (response.ok) {
            setIsLoggedIn(false);
            navigate('/login');
        } else {
            console.error('Failed to logout');
        }
    }

    const renderComponentByRole = () => {
        switch (userRole) {
            case 'Paciente':
                return <div>Dashboard paciente</div>;
            case 'Medico':
                return <div>Dahsboard Medico</div>;
            case 'Administrador':
                return <div>Dashboard Administrador</div>;;
            default:
                return <div>No tiene acceso a esta sección</div>;
        }
    };

    return (
        <div className='ContentArea'>
            {renderComponentByRole()}
            <button className="btn btn-secondary" onClick={handleLogout}>Cerrar Sesión</button>
        </div>
    );
}

export default Dashboard;