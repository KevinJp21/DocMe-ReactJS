import React from 'react'
import './HowWorkHome.css'
import Assets from '../../../../assets/Assets';
const HowWorkHome = () => {

    const CardHWContent = [//Contiene los detalles de las cards
        {
            icon: Assets.icons.CalendarIcon,
            title: "Agendamiento de Citas",
            description: "Elige la fecha y hora que mejor te convengan para tus citas médicas."
        },
        {
            icon: Assets.icons.DoctorIcon,
            title: "Escoge a tu Médico",
            description: "Encuentra y elige al médico indicado para tú cita."
        },
        {
            icon: Assets.icons.LocationIcon,
            title: "Sugerencias de Centros de Atención",
            description: "Basado en tu ubicación y necesidades, la plataforma te sugiere los centros de atención más cercanos y adecuados para ti."
        },
        {
            icon: Assets.icons.NotiIcon,
            title: "Notificaciones",
            description: "Recibirás confirmaciones y recordatorios automáticos para que no olvides tus citas."
        },
        {
            icon: Assets.icons.AppoIcon,
            title: "Gestión de Citas",
            description: "Visualiza, reprograma o cancela tus citas fácilmente desde la plataforma, manteniendo siempre un control claro de tu agenda médica."
        }

    ];

    return (
        <section className='ContainerHowWorkHome'>
            <div className='HeaderHWHome'>
                <h2>CÓMO FUNCIONA</h2>
                <h3>Acceder a servicios de salud nunca fue más fácil con DocMe</h3>
                <p>DocMe está revolucionando el acceso a la salud. Obtén la atención médica que necesitas en solo 5 pasos sencillos.</p>
            </div>
            <div className="WrapperHowWorkHome">

                <div className="ContentHWHome">
                    {CardHWContent.map((card, index) => (
                        <div className="CardHWHome" key={index}>
                            <div className="imgCardHW">
                                <img src={card.icon} alt="" width={"30px"} height={"30px"} />
                            </div>
                            <div className="CardContentHW">
                                <div className="cardHWTitle">
                                    <h4>{card.title}</h4>
                                </div>
                                <div className="CardHWDescription">
                                    <p>{card.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>


                <div className='IMGHowWorkHome'>
                    <div className="ContainerFigureHome">
                        <div className="ContentFigureHW">
                            <img src={Assets.images.HowWorkIMG} alt="Chica con telefono" width={"480px"} height={"480px"} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HowWorkHome