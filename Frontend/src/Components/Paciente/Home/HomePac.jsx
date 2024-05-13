import React from 'react'
import './HomePac.css'
import HomeIMG from '../../../assets/img/HomeIMG.webp'
const HomePac = () => {
    return (
        <section className='HomePac'
            style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.3)), url('${HomeIMG}')`
            }}
        >
                <div className="contentHomePac">
                    <h3>
                        Su salud, nuestra prioridad.
                        <br /> 
                        Gestione sus citas con eficiencia y facilidad.</h3>
                </div>
        </section>

    )
}

export default HomePac