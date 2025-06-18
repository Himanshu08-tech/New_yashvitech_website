import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="site-footer">
      {/* Radial Gradient */}
      <div className="footer-gradient"></div>

      {/* Company Info */}
      <div className="footer-section">
        <h3>YASHVITECH IT SOLUTION</h3>
        <p>
          A software solution provider company focused on digitising daily activities of organisations across
          major business sectors.
        </p>
      </div>

      {/* Quick Links */}
      <div className="footer-section footer-links">
        <h4>Quick Links</h4>
        <ul>
          <li>About</li>
          <li>Contact</li>
          <li>Portfolio</li>
        </ul>
      </div>

      {/* Services */}
      <div className="footer-section footer-service">
        <h4>Our Services</h4>
        <ul>
          <li>Website Development</li>
          <li>Mobile App Development</li>
          <li>Software Training & Internship</li>
          <li>Digital Marketing & Services</li>
        </ul>
      </div>

      {/* Contact Info */}
      <div className="footer-section footer-contact">
        <h4>Contact</h4>
        <p>info@yashvitech.com</p>
        <p>+91 8640091593</p>
        <p>
          2nd Floor, Sahu Complex, near Disha College, Ramnagar, Kota, Raipur, Chhattisgarh 492001
        </p>
      </div>

      {/* Copyright */}
      <div className="footer-copyright">
        Copyright © Yashvitech IT Solution 2024
      </div>
    </footer>
  );
};

export default Footer;
