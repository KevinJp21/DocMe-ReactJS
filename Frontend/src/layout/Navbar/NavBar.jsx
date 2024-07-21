import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import LogoDocMe from '../../../src/assets/img/DocMe_logo.webp';

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header>
            <nav className='NavBarHome'>
                <div className="containerNavHome">
                    <Link className='LogoHome' to="/"><img src={LogoDocMe} alt="DocMe Logo" width={"150pxpx"} height={"73pxpx"}/></Link>
                    <div className={`navHome ${menuOpen ? 'NavHomeOpen' : ''}`}>
                        <ul className="menuHome">
                            <li><Link className="LinkNavHome About" to="/#"><span className='linkText'>Quienes Somos</span></Link></li>
                            <li><Link className="LinkNavHome HowWork" to="/#"><span className='linkText'>Cómo Funciona</span></Link></li>
                            <li><Link className="LinkNavHome Contact" to="/#"><span className='linkText'>Contactanos</span></Link></li>
                            <li><Link className="LinkNavHome LoginBTN" to="/login"><span className='linkText'>Iniciar Sesión</span></Link></li>
                            <li><Link className="LinkNavHome SignUpBTN" to="/signup"><span className='linkText'>Regístrate</span></Link></li>
                            <li className='BTNStart ms-2'><Link className="LinkNavHome StartNow" to="/login"><span className='linkText'>¡Comienza Ahora!</span></Link></li>
                        </ul>
                    </div>
                    <div className={`hamburger ${menuOpen ? 'NavHomeOpen' : ''}`} onClick={toggleMenu}>
                        <span className="bar bar1"></span>
                        <span className="bar bar2"></span>
                        <span className="bar bar3"></span>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default NavBar;
