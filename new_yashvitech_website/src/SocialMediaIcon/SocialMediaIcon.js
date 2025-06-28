import React from 'react';
import './SocialBar.css';
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";

const SocialMediaIcon = () => {


  return (
    <div className="social-bar">
      <a href="https://www.facebook.com/people/Yashvitech-Raipur/pfbid02MWSu8xMKP9Kuq4sY5URW3pxB3zazXrURNKJca5oAGW2pghisMpTq4VfnpD9NAbMfl/" className="social facebook" target="_blank" rel="noreferrer">
        <div className="content">
          <FaFacebookF className="icon" />
          <span className="label">Facebook</span>
        </div>
      </a>
      <a href="https://www.instagram.com/yashvitechraipur/" className="social instagram" target="_blank" rel="noreferrer">
        <div className="content">
          <FaInstagram className="icon" />
          <span className="label">Instagram</span>
        </div>
      </a>
      <a href="https://www.youtube.com/@YashvitechITSolution?si=iRydMOEileM4odLQ" className="social youtube" target="_blank" rel="noreferrer">
        <div className="content">
          <FaYoutube className="icon" />
          <span className="label">YouTube</span>
        </div>
      </a>
      <a href="https://www.linkedin.com/company/yashvitech-it-solution-pvt-ltd/posts/?feedView=all" className="social linkedin" target="_blank" rel="noreferrer">
        <div className="content">
          <FaLinkedinIn className="icon" />
          <span className="label">LinkedIn</span>
        </div>
      </a>
    </div>
  );
};

export default SocialMediaIcon;
