import React from "react";
import "./Service.css";
import video from "../videos/b1.mp4"; // Assuming the video is in the same folder as Service.js

const services = [
  {
    id: "01",
    title: "Full Stack Developer Courses",
    tags: ["HTML", "CSS", "JavaScript", "MongoDB", "Node.js", "React"],
    description:
      "Our Full Stack Developer course teaches you to build complete web applications from scratch. Learn frontend and backend technologies, API integration, and deployment using real-world projects."
  },
  {
    id: "02",
    title: "Frontend Developer",
    tags: ["HTML", "CSS", "JavaScript", "React", "UI/UX"],
    description:
      "Master the art of creating stunning and responsive web interfaces. This course covers everything from HTML/CSS basics to modern JavaScript frameworks like React, focusing on performance and usability."
  },
  {
    id: "03",
    title: "Backend Developer",
    tags: ["Node.js", "Express", "MongoDB", "SQL", "Authentication"],
    description:
      "Learn to design robust backend systems with Node.js and Express. This course covers RESTful APIs, database management, server-side logic, and secure authentication techniques."
  },
  {
    id: "04",
    title: "Digital Marketing",
    tags: ["SEO", "Social Media", "Email Marketing", "Google Ads", "Analytics"],
    description:
      "This course provides hands-on experience with modern digital marketing strategies. Learn SEO, PPC, email campaigns, analytics, and how to build a powerful online presence for any brand."
  }
];

const ServiceItem = ({ id, title, tags, description, index }) => {
  return (
    <div className={`service-item card-${index}`}>
      <div className="service-header">
        <span className="service-id">{id}</span>
        <div>
          <h2>{title}</h2>
          <p className="tags">{tags.join(" • ")}</p>
        </div>
      </div>
      <div className="service-content">
        <p>{description}</p>
      </div>
    </div>
  );
};

function Service() {
  return (
    <div className="service-container">
      <div className="top-banner">
        <div className="top-banner-left">
          <h1>Improve Your Skills.</h1>
          <h3>Internship for IT/CS Students.</h3>
          <p>
            Training and development is critical for any professional. It helps
            you improve your performance and helps your organization meet its
            business goals. Building new skills makes an individual more
            efficient at a job or capable of handling different responsibilities
            and challenges. A professional who receives the necessary training is
            better able to perform one’s job. The training strengthens your
            confidence because you have a deeper understanding of your role and
            responsibilities to perform even better and think of new ideas that
            help you excel.
          </p>
        </div>
        <div className="top-banner-right">
          <video src={video} autoPlay loop muted playsInline />
        </div>
      </div>
      {services.map((service, index) => (
        <ServiceItem key={index} {...service} index={index + 1} />
      ))}
    </div>
  );
}

export default Service;
