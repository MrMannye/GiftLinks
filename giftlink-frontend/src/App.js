import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';
import LoginPage from './components/LoginPage/LoginPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import DetailsPage from './components/DetailsPage/DetailsPage';
import SearchPage from './components/SearchPage/SearchPage';
function App() {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/app/login'); // Example usage of navigate
  };

  return (
    <>
      <Navbar />
      <button onClick={handleNavigation}>Go to Login Page</button>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/app" element={<MainPage />} />
        <Route path="/app/login" element={<LoginPage />} />
        <Route path="/app/register" element={<RegisterPage />} />
        <Route path="/app/details/:productId" element={<DetailsPage />} />
        <Route path="/app/search" element={<SearchPage />} />
      </Routes>
    </>
  );
}


export default App;