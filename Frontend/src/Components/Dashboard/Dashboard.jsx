import React, { useContext } from 'react';
import { AuthContext } from '../AuthContext/AuthContext';
import { useNavigate } from 'react-router-dom';
import DashboardPac from '../Paciente/DashboardPac';
import { useLogout } from '../LogOut/logOut';


const Dashboard = () => {
    const logout = useLogout()
        ; const { userRole } = useContext(AuthContext);
    const navigate = useNavigate();


    const renderComponentByRole = () => {
        switch (userRole) {
            case 'Paciente':
                return <DashboardPac />;
            case 'Medico':
                return <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <p>Disponible en proximas actualizaciones</p>
                            <button style={{width:'200px'}} className="btn btn-secondary" onClick={logout}>Cerrar Sesión</button>
                         </div>;
            case 'Administrador':
                return <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <p>Disponible en proximas actualizaciones</p>
                            <button style={{width:'200px'}} className="btn btn-secondary" onClick={logout}>Cerrar Sesión</button>
                        </div>;
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