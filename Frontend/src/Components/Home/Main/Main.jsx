import React from 'react'
import NavBar from '../Navbar/NavBar'
import Home from '../Home/Home'
import "./Main.css"
const Main = () => {
  return (
    <div id='wrapper'>
        <NavBar />
        <main className="ContainerMain">
          <Home />
        </main>
        <footer></footer>
    </div>
  )
}

export default Main