import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        background: "#fff",
        color: "#333",
        padding: "40px 40px",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        alignItems: "centre",
        gap:"20px",
        
      }}
    >
      {/* Radial Gradient in the Bottom Right */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          width: "300px",
          height: "300px",
          background: "radial-gradient(circle at bottom right, rgba(108, 99, 255, 0.3), transparent 80%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      ></div>

      {/* Content Wrapper */}
      <div style={{ position: "relative", zIndex: 1, flex: "1 2 150px", marginBottom: "20px" }}>
        <h3 style={{ fontSize: "1.4rem", marginBottom: "15px" }}>YASHVITECH IT SOLUTION</h3>
        <p style={{ lineHeight: "1.6", fontSize: "0.95rem" }}>
          A software solution provider company focused on digitising daily activities of organisations across
          major business sectors.
        </p>
      </div>

      {/* Quick Links */}
      <div style={{ position: "relative", zIndex: 1, flex: "1 1 150px", marginBottom: "20px", marginLeft:"20px"}}>
        <h4 style={{ fontSize: "1.1rem", marginBottom: "10px" }}>Quick Links</h4>
        <ul style={{ listStyle: "none", padding: 0, lineHeight: "1.8", fontSize: "0.95rem", margin: 0 }}>
          <li>About</li>
          <li>Contact</li>
          <li>Portfolio</li>
        </ul>
      </div>

      {/* Our Services */}
      <div style={{ position: "relative", zIndex: 1, flex: "1 1 200px", marginBottom: "20px" }}>
        <h4 style={{ fontSize: "1.1rem", marginBottom: "10px" }}>Our Services</h4>
        <ul style={{ listStyle: "none", padding: 0, lineHeight: "1.8", fontSize: "0.95rem", margin: 0 }}>
          <li>Website Development</li>
          <li>Mobile App Development</li>
          <li>Software Training & Internship</li>
          <li>Digital Marketing & Services</li>
        </ul>
      </div>

      {/* Contact Info */}
      <div style={{ position: "relative", zIndex: 1, flex: "1 1 250px", marginBottom: "20px" }}>
        <h4 style={{ fontSize: "1.1rem", marginBottom: "10px" }}>Contact</h4>
        <p style={{ margin: 0, lineHeight: "1.6", fontSize: "0.95rem" }}>info@yashvitech.com</p>
        <p style={{ margin: 0, lineHeight: "1.6", fontSize: "0.95rem" }}>+91 8640091593</p>
        <p style={{ margin: 0, lineHeight: "1.6", fontSize: "0.95rem" }}>
          2nd Floor, Sahu Complex, near Disha College, Ramnagar, Kota, Raipur, Chhattisgarh 492001
        </p>
      </div>

      {/* Copyright */}
      <div
        style={{
          width: "100%",
          textAlign: "center",
          borderTop: "1px solid #ddd",
          paddingTop: "20px",
          marginTop: "20px",
          fontSize: "0.85rem",
          opacity: 0.8,
          position: "relative",
          zIndex: 1,
        }}
      >
        Copyright © Yashvitech IT Solution 2024
      </div>
    </footer>
  );
};

export default Footer;
