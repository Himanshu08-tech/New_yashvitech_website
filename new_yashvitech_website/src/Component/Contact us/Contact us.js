import React from "react";
import "./Contact us.css";

const GlassContactForm = () => {
  return (
    <div className="glass-form-container">
      <header className="header">
        <div className="logo">AO</div>
        <div className="menu">&#9776;</div>
      </header>

      <div className="grid-container">
        {/* Left side - Text */}
        <div className="left-content">
          <h1>Let's talk</h1>
          <p>
            Whether it’s to discuss your next project or just to say hi, feel free
            to reach out to me. I'm excited to hear from you :
          </p>
          <button>Available for freelance - Remote</button>
        </div>

        {/* Right side - Form */}
        <div className="form-container">
          <form>
            <div>
              <label>Name</label>
              <input type="text" placeholder="Jane Smith" />
            </div>
            <div>
              <label>Email</label>
              <input type="email" placeholder="jane@examplesite.fr" />
            </div>
            <div>
              <label>Subject</label>
              <input type="text" placeholder="Subject" />
            </div>
            <div>
              <label>Message</label>
              <textarea placeholder="Tell me everything"></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GlassContactForm;
