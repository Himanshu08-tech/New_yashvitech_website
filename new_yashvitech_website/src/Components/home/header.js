import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "./yashvitechlogo.png";
import './header.css';

const Header = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="YashviTech" />
          </Link>
        </div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/portfolio">Project</Link></li>
          <li><Link to="/contact">contact</Link></li>
          <li><Link to="/about">about</Link></li>
        </ul>
        <div className="auth-buttons">
          <Link to="/career" className="signup">Internship</Link>
        </div>
        <div className="menu-icon">&#9776;</div> {/* Hamburger for mobile */}
      </div>
    </nav>
  );
};

export default Header;
