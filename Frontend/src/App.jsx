import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthContext } from './Components/AuthContext/AuthContext';
import Dashboard from './Components/Dashboard/Dashboard';
import LoginForm from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import Main from './Components/Home/Main/Main';

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
        <Route path="/DocMe/signup" element={!isLoggedIn ? <SignUp /> : <Navigate to={dashboardPath} />} />
        <Route path={dashboardPath} element={isLoggedIn ? <Dashboard /> : <Navigate to="/DocMe/login" />} />
        <Route path="/DocMe/home" element={<Main />}/>
        <Route path="*" element={<Navigate to={isLoggedIn ? dashboardPath : "/DocMe/home"} />} />
      </Routes>
    </Router>
  );
}

export default App;
