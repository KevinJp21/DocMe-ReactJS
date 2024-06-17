import React, { useState, useEffect, useRef }  from 'react'
import './Testimonials.css'
import Assets from '../../../../assets/Assets';

const Testimonials = () => {

    const testimonials = [//Contiene los testimonios de los usuarios
        {
            img: Assets.images.user1,
            text: "DocMe ha facilitado mucho el proceso de encontrar y agendar citas con especialistas. ¡Excelente servicio!",
            name: "Orlando Lotter",
            city: "Barranquilla"
        },
        {
            img: Assets.images.user2,
            text: "Hablar con el chatbot de DocMe fue como tener una consulta inicial. Muy útil y fácil de usar.",
            name: "Andrea Zapata",
            city: "Cartagena"
        },
        {
            img: Assets.images.user3,
            text: "La mejor plataforma para agendar citas médicas sin tener que salir de casa. ¡Muy recomendable!",
            name: "Carlos Gutierrez",
            city: "Medellín"
        },
        {
            img: Assets.images.user4,
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
    )
}

export default Testimonials