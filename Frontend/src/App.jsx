import React, { lazy, Suspense, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthContext } from './Components/AuthContext/AuthContext';


const Dashboard = lazy(() => import('./Components/Dashboard/Dashboard'));
const LoginForm = lazy(() => import('./Components/Login/Login'));
const SignUp = lazy(() => import('./Components/SignUp/SignUp'));
const Main = lazy(() => import('./Components/Home/Main/Main'));

function App() {
  const { isLoggedIn, loading, userRole } = useContext(AuthContext);

  if (loading) {
    return <div></div>;
  }

  // Construye la ruta del dashboard basado en el rol
  const dashboardPath = `/DocMe/${userRole}/dashboard`;

  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/DocMe/login" element={!isLoggedIn ? <LoginForm /> : <Navigate to={dashboardPath} />} />
          <Route path="/DocMe/signup" element={!isLoggedIn ? <SignUp /> : <Navigate to={dashboardPath} />} />
          <Route path={dashboardPath} element={isLoggedIn ? <Dashboard /> : <Navigate to="/DocMe/login" />} />
          <Route path="/DocMe/home" element={<Main />} />
          <Route path="*" element={<Navigate to={isLoggedIn ? dashboardPath : "/DocMe/home"} />} />
        </Routes>
      </Suspense>

    </Router>
  );
}

export default App;
