import React from 'react'
import { useLogout } from '../../Components/LogOut/logOut'
import HomePage from './sections/HomePat/HomePat'
import ChatBot from '../../Components/ChatBot/ChatBot'


const Patient = () => {
  const logout = useLogout();
  return (
    <>
      <HomePage />
      <ChatBot />
      <button className="btn btn-secondary" onClick={logout}>Cerrar Sesión</button>
    </>
    
  )
}

export default Patient