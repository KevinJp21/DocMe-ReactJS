import React from 'react'
import { Link } from 'react-router-dom'
import './About.css'
import Assets from '../../../../assets/Assets'
const About = () => {
    return (
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
                            <Link className="LinkContentHome HomeBTN" to="/#"><span className='linkText'>Saber Más</span></Link>
                        </div>
                    </div>

                    <div className="imgAbout">
                        <div className="imgContent">
                            <img src={Assets.images.MedAbout} alt="" width={"376px"} height={"236px"} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About