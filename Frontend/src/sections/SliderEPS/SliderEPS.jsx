import React from 'react'
import './SliderEPS.css'
import LogoSanitas from '../../../src/assets/logos/EPS Sanitas.svg';
import LogoSura from '../../../src/assets/logos/Grupo Sura.svg';
import LogoFamisanar from '../../../src/assets/logos/LogoFamisanar.webp';
import LogoNuevaEPS from '../../../src/assets/logos/Nueva Eps.svg';
import LogoCompensar from '../../../src/assets/logos/Compensar.svg';

const SliderEPS = () => {

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
                                <img src={logo} alt={`Logo EPS ${index + 1}`} width={"160px"} height={"130px"} />
                            </div>
                        ))}
                    </div>
                    <div className="LogoSlider">
                        {epsLogos.map((logo, index) => (
                            <div className="contentLogo" key={index}  >
                                <img src={logo} alt={`Logo EPS ${index + 1}`} width={"160px"} height={"130px"} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SliderEPS