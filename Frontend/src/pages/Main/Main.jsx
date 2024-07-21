import React, { Suspense, lazy, useState, useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import "./Main.css";
import Layout from '../../layout/Layout';
import Home from '../../sections/Home/Home';
const About = lazy(() => import('../../sections/About/About'));
const SliderEPS = lazy(() => import('../../sections/SliderEPS/SliderEPS'));
const ChatBotHome = lazy(() => import('../../sections/ChatBotHome/ChatBotHome'));
const ServicesHome = lazy(() => import('../../sections/ServicesHome/ServicesHome'));
const HowWorkHome = lazy(() => import('../../sections/HowWorkHome/HowWorkHome'));
const Testimonials = lazy(() => import('../../sections/Testimonials/Testimonials'));



const LazyLoadSection = ({ component: Component, fallback }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.unobserve(entry.target);
            }
        }, {
            root: null,
            rootMargin: '0px',
            threshold: 0.1,
        });

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <div ref={ref} className={`lazyLoadSectionHome ${isVisible ? 'visible' : ''}`}>
            {isVisible ? (
                <Suspense fallback={fallback}>
                    <Component />
                </Suspense>
            ) : (
                fallback
            )}
        </div>
    );
};

const Main = () => {
    return (
        <>
            <Helmet prioritizeSeoTags>

                <title>DocMe | Inicio</title>
                <meta
                    name="description"
                    content="DocMe es una plataforma innovadora dedicada a mejorar la gestión de citas médicas en Colombia"
                />
            </Helmet>

            <Layout>
                <Home />
                <LazyLoadSection component={About} fallback={<div className='fallback'>Loading About...</div>} />
                <LazyLoadSection component={SliderEPS} fallback={<div className='fallback'>Loading SliderEPS...</div>} />
                <LazyLoadSection component={ChatBotHome} fallback={<div className='fallback'>Loading ChatBotHome...</div>} />
                <LazyLoadSection component={ServicesHome} fallback={<div className='fallback'>Loading ServicesHome...</div>} />
                <LazyLoadSection component={HowWorkHome} fallback={<div className='fallback'>Loading HowWorkHome...</div>} />
                <LazyLoadSection component={Testimonials} fallback={<div className='fallback'>Loading Testimonials...</div>} />
            </Layout>
        </>

    );
};

export default Main;
