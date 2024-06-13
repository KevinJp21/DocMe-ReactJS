import React from 'react';
import HomeBG from '../../../assets/img/DocMe_Home BG.png';
import MedVideoChat from '../../../assets/img/MedicoVideoChat.webp'
import MedAbout from '../../../assets/img/DoctorIMGAbout.png'
import LogoSanitas from '../../../assets/logos/EPS Sanitas.svg'
import LogoSura from '../../../assets/logos/Grupo Sura.svg'
import LogoFamisanar from '../../../assets/logos/LogoFamisanar.webp'
import LogoNuevaEPS from '../../../assets/logos/Nueva Eps.svg'
import LogoCompensar from '../../../assets/logos/Compensar.svg'
import ChatBotGreeting from '../../../assets/Animations/DocMe Chatbot.gif'
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    const epsLogos = [
        LogoSanitas,
        LogoSura,
        LogoFamisanar,
        LogoNuevaEPS,
        LogoCompensar,
        LogoSanitas,
        LogoSura,
        LogoFamisanar,
        LogoNuevaEPS,
        LogoCompensar

    ];
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

            <section className='ContainerAbout'>
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

            <section className='ContainerEPS'>
                <div className="ContentEPS">
                    <div className='EPSTextWrapper'>
                        <div className="textContentEPS">
                            <h3 id='TextContent'>
                                Ellos confian en DocMe
                            </h3>
                        </div>
                    </div>

                    <div className="CarouselLogosEPS">
                        <div className="LogoSlider">
                            {epsLogos.map((logo, index) => (
                                <div className="contentLogo" key={index} >
                                    <img src={logo} alt={`Logo EPS ${index + 1}`} />
                                </div>
                            ))}
                        </div>
                        <div className="LogoSlider">
                            {epsLogos.map((logo, index) => (
                                <div className="contentLogo" key={index}  >
                                    <img src={logo} alt={`Logo EPS ${index + 1}`} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className='ContainerChatBotHome'>
                <div className="ContentChatBotHome">
                    <div className='ChatBotTextWrapper'>
                        <div className="textContentChatBot">
                            <h3 id='TextContent'>
                                Estamos aquí para ti. Habla con nuestro asistente de salud
                            </h3>
                        </div>

                        <div className="PTextChatBotHome">
                            <p>
                                Nuestro asistente de salud está disponible para responder tus preguntas y guiarte en el proceso de gestión de citas médicas. Con DocMe, recibirás la atención y el soporte que necesitas, cuando lo necesitas. No importa la hora ni el lugar, estamos aquí para asegurarnos de que tu salud siempre sea una prioridad.
                            </p>
                        </div>
                    </div>
                    
                    <div className='ContainerAnimatadCharBotHome'>
                        <img src={ChatBotGreeting} alt="Chatbot" />
                    </div>

                </div>

            </section>
        </>

    );
};

export default Home;
