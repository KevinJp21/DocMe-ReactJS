import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import LogoDocmeSVG from '../../../assets/img/DocMe_logo.png';

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header>
            <nav className='NavBarHome'>
                <div className="containerNavHome">
                    <Link className='LogoHome' to="/DocMe/home"><img className='img-fluid' src={LogoDocmeSVG} alt="DocMe Logo" /></Link>
                    <div className={`navHome ${menuOpen ? 'NavHomeOpen' : ''}`}>
                        <ul className="menuHome">
                            <li><Link className="LinkNavHome About" to="/DocMe/#"><span className='linkText'>Quienes Somos</span></Link></li>
                            <li><Link className="LinkNavHome HowWork" to="/DocMe/#"><span className='linkText'>Cómo Funciona</span></Link></li>
                            <li><Link className="LinkNavHome Contact" to="/DocMe/#"><span className='linkText'>Contactanos</span></Link></li>
                            <li><Link className="LinkNavHome LoginBTN" to="/DocMe/login"><span className='linkText'>Iniciar Sesión</span></Link></li>
                            <li><Link className="LinkNavHome SignUpBTN" to="/DocMe/signup"><span className='linkText'>Regístrate</span></Link></li>
                            <li className='BTNStart'><Link className="LinkNavHome StartNow" to="/DocMe/login"><span className='linkText'>¡Comienza Ahora!</span></Link></li>
                        </ul>
                    </div>
                    <div className="hamburger" onClick={toggleMenu}>
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default NavBar;
