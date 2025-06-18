import React, { useEffect, useState } from 'react';
import '../about/about.css';
import Images from '../Images/IIML_GMPIT-scaled.jpg'
const About = () => {
  const [shrinkTitle, setShrinkTitle] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShrinkTitle(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const titleText = 'ABOUT US';

  return (
    <section className="about-section">
  <div className="about-content">
    <h1 className={`about-title ${shrinkTitle ? 'shrink' : ''}`}>
      {titleText.split('').map((letter, index) => (
        <span key={index}>{letter}</span>
      ))}
    </h1>

    <div className="about-details">
      <div className="about-info">
        <h1 className="digital">DIGITAL<br />INNOVATION</h1>
        <p className="about-text">
          We blend creativity with technology to build impactful experiences.
          Our solutions are designed to be beautiful, functional, and innovative.
        </p>
      </div>

    <div className="info-grid">
  <div className="blank"></div> {/* Green background box */}
  <img src={Images} alt="About visual" />
</div>

    </div>
  </div>
</section>

  );
};

export default About;
