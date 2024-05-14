import React from 'react';
import useFetchUsers from '../../AuthContext/FetchUsers';
import './HomePac.css';
import HomeIMG from '../../../assets/img/HomeIMG.webp';


const HomePac = () => {
    const { userData, loading, error } = useFetchUsers();

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <section className='HomePac'
            style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.3)), url('${HomeIMG}')`
            }}
        >

            <div className="contentHomePac">
                <div className="greeting">
                    <p>Bienvenido, {userData ? `${userData.name} ${userData.lastName}` : "Usuario"}</p>
                </div>
                <div className="welcomeText">
                    <h3>Su salud, nuestra prioridad.<br />Gestione sus citas con eficiencia y facilidad.</h3>
                </div>

                <div className='BlogHome'>
                <button><span>Visitar blog</span></button>
                </div>
               
            </div>
        </section>
    );
}

export default HomePac;
