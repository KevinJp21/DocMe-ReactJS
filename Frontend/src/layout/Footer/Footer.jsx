import React from 'react'
import './Footer.css'

import LogoDocMe from '../../../src/assets/img/DocMe_logo.webp'
import GitHubIcon from '../../../src/assets/icons/LogoGitHub.svg'
import LinkedinIcon from '../../../src/assets/icons/LinkedinIcon.svg'
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <footer className='FooterContainer'>
            <div className="FooterContent">
                <div className="col imgFooter">
                    <img src={LogoDocMe} alt='LogoDocMe'/>
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
                        <a href="https://github.com/KevinJp21" target="_blank">
                            <img src={GitHubIcon} alt="icono de github" width="30px" height="37.7px"/>
                        </a>

                        <a href="https://www.linkedin.com/in/kevin-julio-667280240/" target="_blank">
                            <img src={LinkedinIcon} alt="icono de github" width="30px" height="37.7px"/>
                        </a>
                    </div>
                </div>
            </div>
            <div className="FooterFoo">
                <div className="Dev">
                    <p>KevinJp21 | Frontend Developer</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer