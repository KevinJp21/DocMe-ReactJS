import React, { useContext } from 'react';
import { AuthContext } from '../../Components/AuthContext/AuthContext';
import { useNavigate } from 'react-router-dom';
import Patient from '../Patient/DashboardPat';
import { useLogout } from '../../Components/LogOut/logOut';


const Dashboard = () => {
    const logout = useLogout(); 
    const { userRole } = useContext(AuthContext);
    const navigate = useNavigate();


    const renderComponentByRole = () => {
        switch (userRole) {
            case 'Paciente':
                return <Patient />;
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