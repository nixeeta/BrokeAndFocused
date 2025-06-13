// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';

import Home from './pages/Home.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Summary from './pages/Summary.jsx';
import About from './pages/About.jsx';
import Contactus from './pages/Contactus.jsx';
import PrivateRoute from './utils/PrivateRoute.jsx';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/summary" element={<PrivateRoute><Summary /></PrivateRoute>} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contactus />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
