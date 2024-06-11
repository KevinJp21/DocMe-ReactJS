import React from 'react';
import useFetchUsers from '../../AuthContext/FetchUsers';
import './HomePac.css';
import HomeIMG from '../../../assets/img/HomeIMG.webp';


const HomePac = () => {
    const { userData, loading, error } = useFetchUsers();

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <section className='HomePac'>
         
        </section>
    );
}

export default HomePac;
