import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaCode, FaUsers, FaRocket, FaLaptopCode, FaLightbulb, FaChartLine } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const FeatureCard = ({ icon, title, description }) => {
  const cardRef = useRef(null);
  const circleRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const circle = circleRef.current;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    gsap.to(circle, {
      x: x - rect.width / 2,
      y: y - rect.height / 2,
      duration: 0.3,
      ease: "power2.out",
    });

    const rotateX = ((y / rect.height) - 0.5) * 12;
    const rotateY = ((x / rect.width) - 0.5) * 12;
    gsap.to(card, {
      rotateX: -rotateX,
      rotateY: rotateY,
      transformPerspective: 1200,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseEnter = () => {
    gsap.to(circleRef.current, { autoAlpha: 1, scale: 1, duration: 0.3, ease: "power2.out" });
  };

  const handleMouseLeave = () => {
    gsap.to(cardRef.current, { rotateX: 0, rotateY: 0, duration: 0.5, ease: "power2.out" });
    gsap.to(circleRef.current, { autoAlpha: 0, scale: 0.5, duration: 0.3, ease: "power2.out" });
  };

  const handleClick = () => {
    gsap.to(cardRef.current, {
      scale: 0.95,
      duration: 0.1,
      yoyo: true,
      repeat: 1,
      ease: "power1.inOut",
    });
  };

  return (
    <div
      ref={cardRef}
      className="feature-card"
      style={{
        position: "relative",
        borderRadius: "1.5rem",
        padding: "2rem 1.5rem",
        boxShadow: "0 10px 30px rgba(10, 10, 10, 0.1)",
        background: "#fff",
        maxWidth: "300px",
        width: "calc(33.333% - 2rem)",
        minHeight: "280px",
        textAlign: "center",
        cursor: "pointer",
        transformStyle: "preserve-3d",
        perspective: "1200px",
        transition: "all 0.3s ease",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {/* Circle Follower */}
      <div
        ref={circleRef}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          background: "radial-gradient(circle at center, rgba(108,99,255,0.2) 0%, rgba(108,99,255,0) 70%)",
          pointerEvents: "none",
          transform: "translate(-50%, -50%)",
          opacity: 0,
          scale: 0.5,
          transition: "opacity 0.3s ease",
        }}
      ></div>

      <div style={{ fontSize: "2.5rem", marginBottom: "1rem", color: "#6C63FF" }}>
        {icon}
      </div>
      <h3 style={{ fontSize: "1.5rem", fontWeight: "600", margin: "0 0 0.75rem" }}>{title}</h3>
      <p style={{ fontSize: "0.95rem", color: "#555", lineHeight: "1.5" }}>{description}</p>
    </div>
  );
};

const FeaturesSection = () => {
  return (
    <section
      style={{
        display: "flex",
        gap: "2rem",
        justifyContent: "center",
        flexWrap: "wrap",
        padding: "4rem 2rem",
        background: "radial-gradient(circle at right, rgba(131, 125, 253, 0.2) 10%, rgba(255, 255, 255, 1) 20%)",
      }}
    >
      <FeatureCard
        icon={<FaCode />}
        title="Real Code Experience"
        description="Work on live projects that boost your portfolio and sharpen your skills."
      />
      <FeatureCard
        icon={<FaUsers />}
        title="Expert Mentorship"
        description="Get guided by professionals and gain deep industry knowledge."
      />
      <FeatureCard
        icon={<FaRocket />}
        title="Career Acceleration"
        description="Build the confidence and experience needed to launch your career fast."
      />
      <FeatureCard
        icon={<FaLaptopCode />}
        title="Cutting-Edge Tools"
        description="Work with the latest technologies to stay ahead in the tech world."
      />
      <FeatureCard
        icon={<FaLightbulb />}
        title="Innovative Projects"
        description="Take part in projects that challenge your creativity and problem-solving."
      />
      <FeatureCard
        icon={<FaChartLine />}
        title="Track Progress"
        description="Monitor your growth with detailed feedback and performance reports."
      />
    </section>
  );
};

export default FeaturesSection;



