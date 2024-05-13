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
            <h3>Su salud, nuestra prioridad.<br />Gestione sus citas con eficiencia y facilidad.</h3>
            <p>Bienvenido, [Nombre del Usuario]! Tienes 3 citas programadas para esta semana.</p>
            <div>
                <button >Visitar blog</button>
            </div>
            <p>Recuerda revisar nuestros últimos consejos de salud en nuestro blog.</p>
        </div>
    </section>
    )
}

export default HomePac