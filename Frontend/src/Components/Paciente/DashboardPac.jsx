import React from 'react'
import { handleLogout } from '../LogOut/logOut'
import HomePac from './Home/HomePac'
import NavBar from './NavBar/NavBar'
NavBar
const DashboardPac = () => {
  return (
    <>
      <NavBar />
      <HomePac />
    </>
    
  )
}

export default DashboardPac

/* <button className="btn btn-secondary" onClick={handleLogout}>Cerrar Sesión</button> */