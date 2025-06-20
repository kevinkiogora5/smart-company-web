import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/smartcow-logo.jpeg';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="navbar-header">
      <div className="navbar-content">
        <div className="navbar-logo">
          <img src={logo} alt="SmartCow Logo" className="navbar-logo-img" />
        </div>
        <nav className="navbar-links">
          <Link to="/" className="navbar-link">
            <button className="navbar-button">HOME</button>
          </Link>
          <Link to="/academy" className="navbar-link">
            <button className="navbar-button">SMARTCOW BROCHURE</button>
          </Link>
          <Link to="/offer" className="navbar-link">
            <button className="navbar-button">WHAT WE OFFER</button>
          </Link>
          <Link to="/news" className="navbar-link">
            <button className="navbar-button">NEWS AND UPDATES</button>
          </Link>
          <Link to="/about" className="navbar-link">
            <button className="navbar-button">ABOUT</button>
          </Link>
          <Link to="/contact" className="navbar-link">
            <button className="navbar-button">CONTACT US</button>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;