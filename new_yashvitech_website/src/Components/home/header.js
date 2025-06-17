import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from "./yashvitechlogo.png";
import './header.css';

const Header = () => {
  const location = useLocation(); 

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="YashviTech" />
          </Link>
        </div>

        <ul className="nav-links">
          <li>
            <Link to="/" className={location.pathname === '/' ? 'active-link' : ''}>Home</Link>
          </li>
          <li>
            <Link to="/services" className={location.pathname === '/services' ? 'active-link' : ''}>Services</Link>
          </li>
          <li>
            <Link to="/portfolio" className={location.pathname === '/portfolio' ? 'active-link' : ''}>Project</Link>
          </li>
          <li>
            <Link to="/contact" className={location.pathname === '/contact' ? 'active-link' : ''}>Contact</Link>
          </li>
          <li>
            <Link to="/about" className={location.pathname === '/about' ? 'active-link' : ''}>About</Link>
          </li>
        </ul>

        <div>
          <Link to="/career">
            <button className={` header-btn ${location.pathname === '/career' ? 'btn-active-link' : ''}`} >Internship</button>
          </Link>
        </div>

        <div className="menu-icon">&#9776;</div>
      </div>
    </nav>
  );
};

export default Header;
