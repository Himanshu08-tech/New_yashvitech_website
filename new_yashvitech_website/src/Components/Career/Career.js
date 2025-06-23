import React, { useState } from "react";
import "./Career.css";
import careersImage from "../Images/a.webp";
import secondImage from "../Images/aa.jpg";
import video1 from "../videos/u1.mp4";
import video2 from "../videos/u4.mp4";
import video3 from "../videos/u3.mp4"; // Import your video files
import AnimatedWrapper from "../../framer-motion-animation/AnimatedWrapper";

const Careers = () => {
  const [videoIndex, setVideoIndex] = useState(null); // State to track which video is active

  // Function to handle hover
  const handleMouseEnter = (index) => {
    setVideoIndex(index); // Set active video index
  };

  const handleMouseLeave = () => {
    setVideoIndex(null); // Reset active video when hover is removed
  };

  return (
    <div className="careers-wrapper">
      {/* Top Section */}
      <AnimatedWrapper variant="fadeInUp" delay={0.2}>
        <div className="careers-section">
          <div className="careers-text">
            <p className="careers-subheading">Careers at Yashvitech</p>
            <h1 className="careers-title">
              Elevate your impact. Join our team and grow with us.
            </h1>
            <p className="careers-description">
              At Yashvitech, we believe in the power of innovation and the
              potential of our people.
            </p>
            <p className="careers-description">
              Yashvitech's brightest minds come together here. Our passionate
              young team thrives in our modern development hubs, crafting
              innovative software and delivering solutions across the entire
              product lifecycle. From internal breakthroughs to impactful client
              projects, we're driving the future with AI, optimization, and
              cutting-edge technologies. At Yashvitech, sustainable innovation
              is at the heart of what we do. If you're a forward-thinker eager
              to make a real impact through end-to-end development, this is
              where you belong.
            </p>
          </div>

          <div className="careers-image">
            <img src={careersImage} alt="Aim Higher Office" />
          </div>
        </div>
      </AnimatedWrapper>
      <AnimatedWrapper variant="fadeInUp" delay={0.2}>

        {/* Bottom Image + Text Section */}
        <div className="careers-secondary">
          <div className="careers-secondary-img">
            <img src={secondImage} alt="Office Workspace 2" />
          </div>
          <div className="careers-secondary-text">
            <p className="careers-quote">
              “We are looking for creative and passionate individuals for new and
              challenging projects.”
            </p>
          </div>
        </div>
      </AnimatedWrapper>

      <AnimatedWrapper variant="fadeInUp" delay={0.2}>
        {/* Cards Section */}
        <div className="careers-cards-section">
          <h2 className="careers-cards-title">
            Calling all thinkers, makers, and groundbreakers
          </h2>
          <div className="careers-cards">
            <div
              className="careers-card"
              onMouseEnter={() => handleMouseEnter(0)} // Set index when mouse enters
              onMouseLeave={handleMouseLeave} // Reset when mouse leaves
            >
              <h3 className="careers-card-title">Innovative Projects</h3>
              <p className="careers-card-description">
                Work on cutting-edge technologies and build impactful solutions
                for real-world problems.
              </p>
              {videoIndex === 0 && <video src={video1} autoPlay muted loop />}
            </div>
            <div
              className="careers-card"
              onMouseEnter={() => handleMouseEnter(1)} // Set index when mouse enters
              onMouseLeave={handleMouseLeave} // Reset when mouse leaves
            >
              <h3 className="careers-card-title">Collaborative Environment</h3>
              <p className="careers-card-description">
                Join a team of passionate professionals who work together to
                achieve shared goals.
              </p>
              {videoIndex === 1 && <video src={video2} autoPlay muted loop />}
            </div>
            <div
              className="careers-card"
              onMouseEnter={() => handleMouseEnter(2)} // Set index when mouse enters
              onMouseLeave={handleMouseLeave} // Reset when mouse leaves
            >
              <h3 className="careers-card-title">Career Growth</h3>
              <p className="careers-card-description">
                We provide opportunities for continuous learning and career
                advancement.
              </p>
              {videoIndex === 2 && <video src={video3} autoPlay muted loop />}
            </div>
          </div>
        </div>
      </AnimatedWrapper>

      <AnimatedWrapper variant="fadeInUp" delay={0.2}>
        {/* Explore Section */}
        <div className="careers-explore">
          <h2 className="careers-explore-title">Explore Our Open Positions</h2>
          <p className="careers-explore-description">
            We're always looking for innovative minds to join our mission at
            Yashvitech.
          </p>
          <p className="careers-explore-contact">
            📧 Send your resume to <strong>careers@yashvitech.com</strong>
          </p>
          <p className="careers-explore-footer">
            Together, let’s build what’s next.
          </p>
        </div>
      </AnimatedWrapper>
    </div>
  );
};

export default Careers;
