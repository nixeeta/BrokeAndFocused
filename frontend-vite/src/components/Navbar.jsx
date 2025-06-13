import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='nav'>
      <Link className="logo" to="/">BrokeAF</Link>
      <nav className="nav-list" >
        <Link className="menu" to="/home">Home</Link>
        <Link className="menu" to="/dashboard">Dashboard</Link>
        <Link className="menu" to="/summary">Summary</Link>
        <Link className="menu" to="/login">Login</Link>
        <Link className="menu" to="/register">Register</Link>
        <Link className="menu" to="/about">About</Link>
        <Link className="menu" to="/contact">Contact Us</Link>
      </nav>
    </div>
  );
};

export default Navbar;
