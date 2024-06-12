import React from 'react';
import HomeBG from '../../../assets/img/DocMe_Home BG.png';
import MedVideoChat from '../../../assets/img/MedicoVideoChat.webp'
import MedAbout from '../../../assets/img/DoctorIMGAbout.png'
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {

    return (
        <>
            <section className='ContainerHome' style={{ backgroundImage: `url(${HomeBG})` }}>
                <div className="ContentHome">
                    <div className="HomeTextWrapper">
                        <div className="textContentHome">
                            <h3 id='TextContent'>
                                Para una atención médica de calidad, los colombianos confían en
                                <br />
                                DocMe para gestionar sus citas.
                                <span style={{ color: 'var(--blue)' }}> Cuidamos de ti, donde estés.</span>
                            </h3>
                        </div>
                    </div>

                    <div className="AppoBTNContainer">
                        <Link className="LinkContentHome Appo HomeBTN" to="/DocMe/login"><span className='linkText'>Agenda tu Cita</span></Link>
                    </div>

                    <div className="imgMedHome">
                        <img src={MedVideoChat} alt="medico en video llamada" />
                    </div>
                </div>
            </section>

            <section className='ContainerAbout mt-5'>
                <div className='ContentAbout'>
                    <div className='AboutTextWrapper'>
                        <div className="textContentAbout">
                            <h3 id='TextContent'>
                                Facilitando el acceso a la atención médica
                            </h3>
                        </div>
                    </div>

                    <div className="AboutContent">
                        <div className="AboutTextContent">
                            <div className="textContentAbout">
                                <p id='TextContent'>
                                    Somos DocMe, una plataforma innovadora dedicada a mejorar la gestión de citas médicas en Colombia. Desde nuestros inicios, nos hemos comprometido a facilitar la interacción entre pacientes y EPSs, garantizando un acceso más eficiente y cómodo a servicios de salud.
                                </p>
                            </div>
                            <div className="AboutBTNContainer">
                                <Link className="LinkContentHome HomeBTN" to="/DocMe/#"><span className='linkText'>Saber Más</span></Link>
                            </div>
                        </div>

                        <div className="imgAbout">
                            <div className="imgContent">
                                <img src={MedAbout} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    );
};

export default Home;
