import React from 'react'
import Layout from '../../layout/Layout'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import error404IMG from '../../assets/img/Error404.webp'

import './Error404.css'


const Error404 = () => {
    return (
        <>
            <Helmet>
                <title>pagina no encontrada</title>
            </Helmet>
            <Layout>
                <div className="ErrorContainer">
                    <picture><img src={error404IMG} alt="Imagen de error 404 - pagina no encontrada" width="500px" height="215px" loading="lazy" decoding="async" /></picture>
                    <h4>No pudimos encontrar esta pagina</h4>
                    <p>La pagina que estas buscando no existe o ha sido eliminada</p>
                    <button className="BTNSBackHome"><Link to="/"><span>Regresar al inicio</span></Link></button>
                </div>

            </Layout>
        </>

    )
}

export default Error404
