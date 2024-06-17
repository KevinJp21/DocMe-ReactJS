import React from 'react'
import NavBar from '../SectionsHome/Navbar/NavBar'
import Home from '../SectionsHome/Home/Home'
import About from '../SectionsHome/About/About'
import SliderEPS from '../SectionsHome/SliderEPS/SliderEPS'
import ChatBotHome from '../SectionsHome/ChatBotHome/ChatBotHome'
import ServicesHome from '../SectionsHome/ServicesHome/ServicesHome'
import HowWorkHome from '../SectionsHome/HowWorkHome/HowWorkHome'
import Testimonials from '../SectionsHome/Testimonials/Testimonials'
import "./Main.css"
const Main = () => {
  return (
    <div id='wrapper'>
        <NavBar />
        <main className="ContainerMain">
          <Home />
          <About />
          <SliderEPS />
          <ChatBotHome />
          <ServicesHome />
          <HowWorkHome />
          <Testimonials />
        </main>
        <footer></footer>
    </div>
  )
}

export default Main