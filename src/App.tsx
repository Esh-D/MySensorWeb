import React from 'react';
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import PasswordReset from './pages/PasswordReset/PasswordReset';
import Dashboard from './pages/Dashboard/Dashboard';
import Landing from './pages/Landing/Landing';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './providers/AuthContext';

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
            <Routes>
              <Route key={0} path="/" element={<Landing />} />
              <Route key={1} path="login" element={<Login />} />
              <Route key={2} path="signup" element={<Signup />} />
              <Route key={3} path="password-reset" element={<PasswordReset />} />
              <Route key={4} path="dashboard" element={<Dashboard />} />
            </Routes>
        </BrowserRouter>
      </AuthProvider>
      
    </div>
  );
}

export default App;

/*
*/
