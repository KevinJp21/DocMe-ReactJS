import React from 'react'
import './SliderEPS.css'
import Assets from '../../../../assets/Assets';

const SliderEPS = () => {

    const epsLogos = [
        Assets.logos.LogoSanitas,
        Assets.logos.LogoSura,
        Assets.logos.LogoFamisanar,
        Assets.logos.LogoNuevaEPS,
        Assets.logos.LogoCompensar,
        Assets.logos.LogoSanitas,
        Assets.logos.LogoSura,
        Assets.logos.LogoFamisanar,
        Assets.logos.LogoNuevaEPS,
        Assets.logos.LogoCompensar

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