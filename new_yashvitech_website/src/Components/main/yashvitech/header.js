// Header.js
import React from 'react';
import Logo from "./yashvitechlogo.png";
import '../yashvitech/header.css';

const Header = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo"><img src={Logo} alt="YashviTech" /></div>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Project</a></li>
          <li><a href="#">Review</a></li>
        </ul>
        <div className="auth-buttons">
          <a href="#" className="signup">internship</a>
        </div>
        <div className="menu-icon">&#9776;</div> {/* Hamburger for mobile */}
      </div>
    </nav>
  );
};

export default Header;
