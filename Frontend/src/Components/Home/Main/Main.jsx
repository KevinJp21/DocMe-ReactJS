import React, { Suspense, lazy, useState, useRef, useEffect } from 'react';
import NavBar from '../SectionsHome/Navbar/NavBar';
import "./Main.css";

const Home = lazy(() => import('../SectionsHome/Home/Home'));
const About = lazy(() => import('../SectionsHome/About/About'));
const SliderEPS = lazy(() => import('../SectionsHome/SliderEPS/SliderEPS'));
const ChatBotHome = lazy(() => import('../SectionsHome/ChatBotHome/ChatBotHome'));
const ServicesHome = lazy(() => import('../SectionsHome/ServicesHome/ServicesHome'));
const HowWorkHome = lazy(() => import('../SectionsHome/HowWorkHome/HowWorkHome'));
const Testimonials = lazy(() => import('../SectionsHome/Testimonials/Testimonials'));

import Footer from '../SectionsHome/Footer/Footer';



const LazyLoadSection = ({ component: Component, fallback, shouldLoad }) => { // Definición del componente funcional LazyLoadSection

  const [isVisible, setIsVisible] = useState(false); // Estado para controlar la visibilidad del componente

  const ref = useRef(null); // Referencia mutable para el elemento que se observará

  useEffect(() => { // Efecto que se ejecuta cuando cambia shouldLoad o se monta el componente

      if (shouldLoad) { // Si shouldLoad es true, establece isVisible a true y retorna
          setIsVisible(true);
          return;
      }

      const observer = new IntersectionObserver( // Creación de un IntersectionObserver para observar la visibilidad del elemento
          ([entry]) => {
              if (entry.isIntersecting) {//se vuelve true cuando el elemento es visible en el viewport
                  setIsVisible(true); // Marca el componente como visible
                  observer.disconnect(); // Desconecta el observer una vez que el componente es visible
              }
          },
          {
              root: null, // Utiliza el viewport como el contenedor root
              rootMargin: '0px', // Sin margen adicional alrededor del root
              threshold: .1, // Porcentaje del elemento que debe estar visible para activar la callback
          }
      );

      if (ref.current) { // Si ref.current existe (el elemento está montado), observa ese elemento
          observer.observe(ref.current);
      }

      return () => {// Cleanup: desconecta el observer cuando el componente se desmonta o shouldLoad cambia
          if (ref.current) {
              observer.unobserve(ref.current);
          }
      };
  }, [shouldLoad]);

  return ( // Renderiza el componente LazyLoadSection
      <div ref={ref} className={`lazyLoadSectionHome ${isVisible ? 'visible' : ''}`}>

          {isVisible ? ( // Si el componente es visible, renderiza el Componente dentro de Suspense
              <Suspense fallback={fallback}>
                  <Component />
              </Suspense>
          ) : (
              fallback // Si no es visible, muestra el fallback
          )}
      </div>
  );
};

const Main = () => {
    return (
        <div id="wrapper">
            <NavBar />
            <main className="ContainerMain">
                <Suspense fallback={<div>Loading Home...</div>}>
                    <Home />
                </Suspense>
                <LazyLoadSection component={About} fallback={<div className='fallback'>Loading About...</div>} />
                <LazyLoadSection component={SliderEPS} fallback={<div className='fallback'>Loading SliderEPS...</div>} />
                <LazyLoadSection component={ChatBotHome} fallback={<div className='fallback'>Loading ChatBotHome...</div>} />
                <LazyLoadSection component={ServicesHome} fallback={<div className='fallback'>Loading ServicesHome...</div>} />
                <LazyLoadSection component={HowWorkHome} fallback={<div className='fallback'>Loading HowWorkHome...</div>} />
                <LazyLoadSection component={Testimonials} fallback={<div className='fallback'>Loading Testimonials...</div>} />
            </main>
            <Footer />
        </div>
    );
};

export default Main;
