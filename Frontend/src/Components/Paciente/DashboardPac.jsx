import React from 'react'
import { useLogout } from '../LogOut/logOut'
import HomePac from './Home/HomePac'
import NavBar from './NavBar/NavBar'
NavBar
const DashboardPac = () => {
  const logout = useLogout();
  return (
    <>
      <NavBar />
      <HomePac />
      <button className="btn btn-secondary" onClick={logout}>Cerrar Sesión</button>
    </>
    
  )
}

export default DashboardPac