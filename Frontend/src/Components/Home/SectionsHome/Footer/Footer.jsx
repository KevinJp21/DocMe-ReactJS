import React from 'react'
import './Footer.css'
import Assets from '../../../../assets/Assets'
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <footer className='FooterContainer'>
            <div className="FooterContent">
                <div className="col imgFooter">
                    <img src={Assets.logos.LogoDocMe} />
                    <p>Tu salud, nuestra prioridad</p>
                </div>
                <div className="col LinksHome">
                    <h3>Enlaces de interés</h3>
                    <nav className='NavFooter'>
                        <ul className='MenuNavFooter'>
                            <li>
                                <Link to="/#">Quienes Somos</Link>
                            </li>
                            <li>
                                <Link to="/#">Cómo Funciona</Link>
                            </li>
                            <li>
                                <Link to="/#">Contactanos</Link>
                            </li>
                            <li>
                                <Link to="/#">Iniciar Sesión</Link>
                            </li>
                            <li>
                                <Link to="/#">Regístrate</Link>
                            </li>
                            <li>
                                <Link to="/#">Términos y Condiciones</Link>
                            </li>
                            <li>
                                <Link to="/#">Política de Privacidad</Link>
                            </li>
                            <li>
                                <Link to="/#">Preguntas Frecuentes</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="col Contact">
                    <h3>Contactanos</h3>
                    <p>Envianos un correo cuando quieras a <a href="mailto:support@docme.com">support@docme.com</a></p>
                    <h3>Sigueme</h3>
                    <div className="LogosSocialMed">
                        <a href="https://github.com/KevinJp21">
                            <img src={Assets.icons.GitHubIcon} alt="icono de github" />
                        </a>

                        <a href="https://www.linkedin.com/in/kevin-julio-667280240/">
                            <img src={Assets.icons.LinkedinIcon} alt="icono de github" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer