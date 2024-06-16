import React, { useState, useEffect, useRef } from 'react';
import Assets from '../../../assets/Assets';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
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

    const testimonials = [//Contiene los testimonios de los usuarios
        {
            img: "https://c.pxhere.com/photos/e8/60/smile_profile_face_male_portrait_young_person_glasses-451653.jpg!d",
            text: "DocMe ha facilitado mucho el proceso de encontrar y agendar citas con especialistas. ¡Excelente servicio!",
            name: "Orlando Lotter",
            city: "Barranquilla"
        },
        {
            img: "https://i.pinimg.com/736x/ba/fe/b7/bafeb72712354eac2d71d8b6639156a8.jpg",
            text: "Hablar con el chatbot de DocMe fue como tener una consulta inicial. Muy útil y fácil de usar.",
            name: "Andrea Zapata",
            city: "Cartagena"
        },
        {
            img: "https://i.pinimg.com/736x/03/19/8d/03198defbf9905613bedbbdd2323228d.jpg",
            text: "La mejor plataforma para agendar citas médicas sin tener que salir de casa. ¡Muy recomendable!",
            name: "Carlos Gutierrez",
            city: "Medellín"
        },
        {
            img: "https://i.pinimg.com/736x/6c/0b/b0/6c0bb09014da69cab469bed9e49732e8.jpg",
            text: "DocMe ha transformado mi forma de gestionar las citas médicas, haciendo todo mucho más fácil y rápido.",
            name: "Laura Pérez",
            city: "Bogotá"
        },
    ];


    const [current, setCurrent] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const transitionTimeout = useRef(null);
    const autoPlayTimeout = useRef(null);
    const slideCount = testimonials.length;
    const autoPlayRef = useRef();

    const nextSlide = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrent((prev) => prev + 1);
    };

    const prevSlide = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrent((prev) => prev - 1);
    };

    const resetAutoPlay = () => {
        clearInterval(autoPlayTimeout.current);
        autoPlayTimeout.current = setInterval(() => {
            autoPlayRef.current();
        }, 7000); // Cambia el slide cada 7 segundos
    };

    useEffect(() => {
        autoPlayRef.current = nextSlide;
    });

    useEffect(() => {
        const play = () => {
            autoPlayRef.current();
        };

        autoPlayTimeout.current = setInterval(play, 7000); // Cambia el slide cada 7 segundos

        return () => clearInterval(autoPlayTimeout.current); // Limpia el intervalo al desmontar el componente
    }, []);

    useEffect(() => {
        // Este efecto se ejecuta cada vez que 'current', 'isTransitioning' o 'slideCount' cambian
        if (isTransitioning) { // Para evitar múltiples transiciones de forma simultánea
            // Establece un temporizador que retrasa la ejecución de la función interna por 500ms
            transitionTimeout.current = setTimeout(() => {
                // Cuando el temporizador se completa, establece 'isTransitioning' a false para indicar que la transición ha terminado
                setIsTransitioning(false);
    
                // Si el índice actual de la diapositiva es igual al número total de diapositivas (final del array duplicado)
                if (current === slideCount) {
                    // Reinicia 'current' a 0 para mostrar la primera diapositiva (realizando un bucle)
                    setCurrent(0);
                // Si el índice actual de la diapositiva es -1 (inicio del array duplicado en dirección opuesta)
                } else if (current === -1) {
                    // Establece 'current' al índice de la última diapositiva (realizando un bucle inverso)
                    setCurrent(slideCount - 1);
                }
            }, 500); // Duración de la transición en milisegundos
        }
    
        // Función de limpieza para cancelar el temporizador si el componente se desmonta o si 'current', 'isTransitioning' o 'slideCount' cambian antes de que el temporizador se complete
        return () => clearTimeout(transitionTimeout.current);
    }, [current, isTransitioning, slideCount]);

    useEffect(() => {
        resetAutoPlay();
    }, [current]);



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
                        <img src={Assets.images.MedVideoChat} alt="medico en video llamada" />


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
                                <Link className="LinkContentHome HomeBTN" to="/#"><span className='linkText'>Saber Más</span></Link>
                            </div>
                        </div>

                        <div className="imgAbout">
                            <div className="imgContent">
                                <img src={Assets.images.MedAbout} alt="" />
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
                        <video src={Assets.animations.ChatBotGreeting} alt="Chatbot" loop autoPlay muted />
                    </div>

                </div>

            </section>

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
                            <img src={Assets.icons.CalendarIcon} alt="" />
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
                            <img src={Assets.icons.LocationIcon} alt="" />
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
                            <img src={Assets.icons.ChatBotIcon} alt="" />
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
                            <img src={Assets.icons.ClinicHistoryIcon} alt="" />
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
                                    <img src={card.icon} alt="" />
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
                                <img src={Assets.images.HowWorkIMG} alt="Chica con telefono" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='ContainerTestimonial'>
                <div className='TextWrapperTestimonial'>
                    <h2>TESTIMONIOS</h2>
                    <h3>Lo que nuestros usuarios dicen sobre su experiencia con DocMe</h3>
                </div>
                <div className="ContainerSliderTesti">
            <button onClick={prevSlide}><span>{'<'}</span></button>
            <div className="Testimonial">
                <div className="TestiContent" style={{
                    transform: `translateX(-${current * 100}%)`,
                    transition: isTransitioning ? 'transform 0.5s ease' : 'none'
                }}>
                    {[...testimonials, ...testimonials].map((testi, index) => (
                        <div className="Slide" key={index}>
                            <img src={testi.img} className='image' alt={testi.name} />
                            <p>{testi.text}</p>
                            <div className="SlideTestiDetails">
                                <span className='name'>{testi.name}</span>
                                <span className='city'>{testi.city}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <button onClick={nextSlide}><span>{'>'}</span></button>
        </div>
            </section>
        </>

    );
};

export default Home;


