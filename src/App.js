import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

// Import components
import MainMenu from './pages/MainMenu';
import Login from './pages/Login';
import MainPage from './pages/MainPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  // Mock login function
  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <MainMenu />
        
        <Routes>
          <Route path="/" element={<Navigate to="/main" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/main" element={<MainPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
