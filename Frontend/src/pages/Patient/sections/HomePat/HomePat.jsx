import React from 'react';
import useFetchUsers from '../../../../components/AuthContext/fetchUsers';
import './HomePat.css';


const HomePage = () => {
    const { userData, loading, error } = useFetchUsers();

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <section className='HomePat'>
           Disponible en proximas actualizaciones
        </section>
    );
}

export default HomePage;
