import React from 'react'
import './ServicesHome.css'
import Assets from '../../../../assets/Assets'

const ServicesHome = () => {
    return (
        <section className='ContainerServicesHome'>
            <div className="ContentServicesHome">
                <div className='ServicesTextWrapper'>
                    <div className="textContentServices">
                        <h3 id='TextContent'>
                            Nuestros Servicios
                        </h3>
                    </div>

                    <div className="PTextServicesHome">
                        <p>
                            DocMe te ofrece una solución integral para gestionar tus citas médicas y recibir atención de calidad desde la comodidad de tu hogar.
                        </p>
                    </div>
                </div>
            </div>

            <div className='CardServicesHome'>
                <div className="CardService">
                    <div className="imgCardService">
                        <img src={Assets.icons.CalendarIcon} alt="" width={"90px"} height={"90px"} />
                    </div>
                    <div className="CardContentService">
                        <div className="cardServiceTitle">
                            <h4>Gestión de Citas Médicas</h4>
                        </div>
                        <div className="CardServiceDescription">
                            <p>Agenda y gestiona tus citas médicas de manera sencilla y rápida, sin necesidad de trasladarte ni esperar largas filas.</p>
                        </div>
                    </div>
                </div>

                <div className="CardService">
                    <div className="imgCardService">
                        <img src={Assets.icons.LocationIcon} alt="" width={"90px"} height={"90px"} />
                    </div>
                    <div className="CardContentService">
                        <div className="cardServiceTitle">
                            <h4>Recomendación de Centros de Atención Cercanos</h4>
                        </div>
                        <div className="CardServiceDescription">
                            <p>Te recomendamos el centro de atención más cercano para tu comodidad y rapidez en el acceso a los servicios de salud.</p>
                        </div>
                    </div>
                </div>

                <div className="CardService">
                    <div className="imgCardService">
                        <img src={Assets.icons.ChatBotIcon} alt="" width={"90px"} height={"90px"} />
                    </div>
                    <div className="CardContentService">
                        <div className="cardServiceTitle">
                            <h4>DocMe ChatBot</h4>
                        </div>
                        <div className="CardServiceDescription">
                            <p>Consulta sobre tus citas, síntomas y más. Recibe respuestas verificadas por profesionales de la salud a través de nuestro chatbot.</p>
                        </div>
                    </div>
                </div>

                <div className="CardService">
                    <div className="imgCardService">
                        <img src={Assets.icons.ClinicHistoryIcon} alt="" width={"90px"} height={"90px"} />
                    </div>
                    <div className="CardContentService">
                        <div className="cardServiceTitle">
                            <h4>Historial Médico</h4>
                        </div>
                        <div className="CardServiceDescription">
                            <p>Accede a tu historial médico completo de manera segura y organizada. Consulta resultados de exámenes y tratamientos previos.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServicesHome