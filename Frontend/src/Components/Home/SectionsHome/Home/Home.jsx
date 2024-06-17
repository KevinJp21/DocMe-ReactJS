import React from 'react';
import Assets from '../../../../assets/Assets';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {

    return (
        <>
            <section className='ContainerHome' style={{ backgroundImage: `url(${Assets.images.HomeBG})` }}>
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
                        <Link className="LinkContentHome Appo HomeBTN" to="/login"><span className='linkText'>Agenda tu Cita</span></Link>
                    </div>

                    <div className="imgMedHome">
                        <img src={Assets.images.MedVideoChat} alt="medico en video llamada" width={"860px"} height={"580px"} />
                    </div>
                </div>
            </section>
        </>

    );
};

export default Home;


