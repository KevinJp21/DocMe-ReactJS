import React, { useContext } from 'react';
import { AuthContext } from '../AuthContext/AuthContext';
import { useNavigate } from 'react-router-dom';
import DashboardPac from '../Paciente/DashboardPac';


const Dashboard = () => {
    const { userRole } = useContext(AuthContext);
    const navigate = useNavigate();


    const renderComponentByRole = () => {
        switch (userRole) {
            case 'Paciente':
                return <DashboardPac />;
            case 'Medico':
                return <div>Dahsboard Medico</div>;
            case 'Administrador':
                return <div>Dashboard Administrador</div>;;
            default:
                return <div>No tiene acceso a esta sección</div>;
        }
    };

    return (
        <main className='ContentArea'>
            {renderComponentByRole()}
        </main>
    );
}

export default Dashboard;