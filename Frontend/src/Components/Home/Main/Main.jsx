import React, { Suspense, lazy, useState, useRef, useEffect } from 'react';
import NavBar from '../SectionsHome/Navbar/NavBar';
import "./Main.css";

import Home from '../SectionsHome/Home/Home';
const About = lazy(() => import('../SectionsHome/About/About'));
const SliderEPS = lazy(() => import('../SectionsHome/SliderEPS/SliderEPS'));
const ChatBotHome = lazy(() => import('../SectionsHome/ChatBotHome/ChatBotHome'));
const ServicesHome = lazy(() => import('../SectionsHome/ServicesHome/ServicesHome'));
const HowWorkHome = lazy(() => import('../SectionsHome/HowWorkHome/HowWorkHome'));
const Testimonials = lazy(() => import('../SectionsHome/Testimonials/Testimonials'));

import Footer from '../SectionsHome/Footer/Footer';


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
        <div id="wrapper">
            <NavBar />
            <main className="ContainerMain">
                    <Home />
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
