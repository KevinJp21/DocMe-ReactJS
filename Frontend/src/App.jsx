import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthContext } from './Components/AuthContext/AuthContext';
import Dashboard from './Components/Dashboard/Dashboard';
import ChatBot from './Components/ChatBot/ChatBot';
import LoginForm from './Components/Login/Login';

function App() {
  const { isLoggedIn, loading, userRole } = useContext(AuthContext);

  if (loading) {
    return <div></div>; //Muestra esto al recargar la pagina
  }
  return (
    <Router>
      <Routes>
        <Route path="/login" element={!isLoggedIn ? <LoginForm /> : <Navigate to={`/dashboard/${userRole}`} />} />
        <Route path={`/dashboard/${userRole}`}  element={isLoggedIn ? <DashboardAndChatBot /> : <Navigate to="/login" />} />
        <Route path="*" element={<Navigate to={isLoggedIn ? `/dashboard/${userRole}` : "/login"} />} />
      </Routes>
    </Router>
  );
}

// Componente que agrupa Dashboard y ChatBot
function DashboardAndChatBot() {
  return (
    <>
      <Dashboard />
      <ChatBot />
    </>
  );
}

export default App;
