import React from "react";
import { useNavigate } from "react-router-dom";
import "./Service.css";
import video from "../videos/b1.mp4";
import AnimatedWrapper from '../../framer-motion-animation/AnimatedWrapper'
import { motion } from "framer-motion";


const pageTransition = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -40 },
};
const services = [
  {
    id: "01",
    slug: "fullstack",
    title: "Full Stack Developer Courses",
    tags: ["HTML", "CSS", "JavaScript", "python", "django", "React", "python", "Django ", "php", "database", "SQL", "java"],
    description:
      "Our Full Stack Developer course teaches you to build complete web applications from scratch."
  },
  {
    id: "02",
    slug: "frontend",
    title: "Frontend Developer",
    tags: ["HTML", "CSS", "JavaScript", "React"],
    description:
      "Master the art of creating stunning and responsive web interfaces using modern frontend technologies."
  },
  {
    id: "03",
    slug: "backend",
    title: "Backend Developer",
    tags: ["python", "Django ", "php", "database", "SQL", "java"],
    description:
      "Learn to build robust backend systems with Node.js, Express, and databases."
  },
];

const ServiceItem = ({ id, title, tags, description, slug, index }) => {
  const navigate = useNavigate();
  const handleClick = () => navigate(`/yashvi/${slug}`);

  return (
    <motion.div
      className="service-container"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={pageTransition}
      transition={{ duration: 0.6 }}
    >
      <div className={`service-item card-${index}`} onClick={handleClick} style={{ cursor: "pointer" }}>
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
    </motion.div>
  );
};

function Service() {
  return (
    <motion.div
      className="service-container"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={pageTransition}
      transition={{ duration: 0.6 }}
    >
      <div className="service-container">
        <AnimatedWrapper variant="fadeInUp" delay={0.2}>

          <div className="top-banner">
            <div className="top-banner-left">
              <h1>Improve Your Skills.</h1>
              <h3>Internship for IT/CS Students.</h3>
              <p>
                Training and development help you perform better, grow in your role, and build new ideas.
              </p>
            </div>
            <div className="top-banner-right">
              <video src={video} autoPlay loop muted playsInline />
            </div>
          </div>
        </AnimatedWrapper>
        <AnimatedWrapper variant="fadeInUp" delay={0.2}>

          {services.map((service, index) => (
            <ServiceItem key={index} {...service} index={index + 1} />
          ))}
        </AnimatedWrapper>
      </div>
    </motion.div>
  );
}

export default Service;
