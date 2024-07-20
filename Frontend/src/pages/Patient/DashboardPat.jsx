import React from 'react'
import { useLogout } from '../../components/LogOut/logOut'
import HomePage from './sections/HomePat/HomePat'
import ChatBot from '../../components/ChatBot/ChatBot'


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