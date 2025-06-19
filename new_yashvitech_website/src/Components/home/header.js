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
            <Link to="/" className={location.pathname === '/' ? 'active-link' : ''}
            >Home</Link>
            {location.pathname === '/' && <hr className="active-hr" />}
          </li>
          <li>
            <Link to="/services" className={location.pathname === '/services' ? 'active-link' : ''}>Services</Link>
            {location.pathname === '/services' && <hr className="active-hr" />}

          </li>
          <li>
            <Link to="/portfolio" className={location.pathname === '/portfolio' ? 'active-link' : ''}>Project</Link>
            {location.pathname === '/portfolio' && <hr className="active-hr" />}

          </li>
          <li>
            <Link to="/contact" className={location.pathname === '/contact' ? 'active-link' : ''}>Contact</Link>
            {location.pathname === '/contact' && <hr className="active-hr" />}

          </li>
          <li>
            <Link to="/about" className={location.pathname === '/about' ? 'active-link' : ''}>About</Link>
            {location.pathname === '/about' && <hr className="active-hr" />}

          </li>
        </ul>

        <div>
          <Link to="/career">
            <button className={`header-btn ${location.pathname === '/career' ? 'btn-active-link' : ''}`} >Internship
            </button>
          </Link>
        </div>

        <div className="menu-icon">&#9776;</div>
      </div>
    </nav>
  );
};

export default Header;
