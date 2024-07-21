import React from 'react'
import NavBar from './Navbar/NavBar'
import Footer from './Footer/Footer';

export default function Layout({ children }) {

    return (
        <main className="ContainerMain">
            {<NavBar />}
            {children}
            <Footer />
        </main>
    )
}