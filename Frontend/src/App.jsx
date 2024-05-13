import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthContext } from './Components/AuthContext/AuthContext';
import Dashboard from './Components/Dashboard/Dashboard';
import ChatBot from './Components/ChatBot/ChatBot';
import LoginForm from './Components/Login/Login';

function App() {
  const { isLoggedIn, loading, userRole } = useContext(AuthContext);

  if (loading) {
    return <div></div>; // Improved loading indication
  }

  // Construct the dynamic dashboard route based on user role
  const dashboardPath = `/DocMe/${userRole}/dashboard`;

  return (
    <Router>
      <Routes>
        <Route path="/DocMe/login" element={!isLoggedIn ? <LoginForm /> : <Navigate to={dashboardPath} />} />
        <Route path={dashboardPath} element={isLoggedIn ? <DashboardAndChatBot /> : <Navigate to="/DocMe/login" />} />
        <Route path="*" element={<Navigate to={isLoggedIn ? dashboardPath : "/DocMe/login"} />} />
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
