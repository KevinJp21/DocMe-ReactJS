import React, { lazy, Suspense, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthContext } from './Components/AuthContext/AuthContext';

const Error404 = lazy(() => import('./pages/Error404/Error404'))
const Dashboard = lazy(() => import('./pages/Dashboard/Dashboard'));
const LoginForm = lazy(() => import('./pages/Login/Login'));
const SignUp = lazy(() => import('./pages/SignUp/SignUp'));
const Main = lazy(() => import('./pages/Main/Main'));

function App() {
  const { isLoggedIn, loading, userRole } = useContext(AuthContext);

  if (loading) {
    return <div></div>;
  }

  // Construye la ruta del dashboard basado en el rol
  const dashboardPath = `/${userRole}/dashboard`;

  return (
      <Router>
        <Suspense fallback={<div className='fallback'>Loading...</div>}>
          <Routes>
            <Route path="/login" element={!isLoggedIn ? <LoginForm /> : <Navigate to={dashboardPath} />} />
            <Route path="/signup" element={!isLoggedIn ? <SignUp /> : <Navigate to={dashboardPath} />} />
            <Route path={dashboardPath} element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" />} />
            <Route path="/home" element={<Main />} />
            <Route path="/page-not-found" element={<Error404 />} />
            <Route path="*" element={isLoggedIn ? <Navigate to={dashboardPath} replace /> : <Error404 />}
            />
          </Routes>
        </Suspense>
      </Router>
  );
}

export default App;
