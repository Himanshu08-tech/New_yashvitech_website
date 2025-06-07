import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaCode, FaDatabase, FaMobileAlt, FaCloud } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const SmoothParallaxScroll = () => {
  const sectionRef = useRef(null);
  const cardsWrapperRef = useRef(null);
  const bgTextRef = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const cardsWrapper = cardsWrapperRef.current;
    const bgText = bgTextRef.current;

    const totalScroll = cardsWrapper.scrollWidth - window.innerWidth;

    let ctx = gsap.context(() => {
      // Background text parallax
      gsap.to(bgText, {
        x: -totalScroll * 0.6,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${cardsWrapper.scrollWidth * 1.5}`,
          scrub: 1,
        },
      });

      // Cards scroll
      gsap.to(cardsWrapper, {
        x: -totalScroll,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${cardsWrapper.scrollWidth * 1.5}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // Animate cards in
      gsap.utils.toArray(".card").forEach((card) => {
        gsap.from(card, {
          opacity: 0,
          y: 50,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      });
    }, section);

    return () => ctx.revert();
  }, []);

  const introCard = {
    title: "Why Learn These Technologies?",
    content:
      "In today's digital age, mastering web, mobile, and cloud technologies opens up incredible career opportunities. You'll gain practical skills to build real-world applications, become job-ready, and stay ahead in the ever-evolving tech landscape.",
  };

  const cardsData = [
    {
      title: "Full-Stack Development",
      icon: <FaCode size={40} />,
      content:
        "Master HTML, CSS, JavaScript, React, Node.js, and frameworks like Django & Laravel. Build real-world web apps.",
    },
    {
      title: "Database Systems",
      icon: <FaDatabase size={40} />,
      content:
        "Learn MySQL, PostgreSQL, MongoDB & SQLite. Design, query & optimize robust databases for scalable apps.",
    },
    {
      title: "Mobile App Development",
      icon: <FaMobileAlt size={40} />,
      content:
        "Build cross-platform apps using React Native. Dive into API integration, performance & mobile-first UX/UI.",
    },
    {
      title: "Cloud & DevOps",
      icon: <FaCloud size={40} />,
      content:
        "Get hands-on with cloud platforms, CI/CD pipelines & deployment tools. Learn GitHub, Docker & server setup.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      style={{
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        background: "linear-gradient(135deg,rgb(255, 253, 253),rgb(255, 255, 255))", // BACK to previous neutral gradient
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
      }}
    >
      {/* Big scrolling text */}
      <h1
        ref={bgTextRef}
        style={{
          position: "absolute",
          fontSize: "12vw",
          color: "rgba(150, 100, 200, 0.25)",
          top: "50%",
          left: "0",
          transform: "translateY(-50%)",
          whiteSpace: "nowrap",
          pointerEvents: "none",
          fontWeight: "900",
          letterSpacing: "8px",
          zIndex: 1,
        }}
      >
        YASHVITECH IT SOLUTIONS
      </h1>

      {/* Cards */}
      <div
        ref={cardsWrapperRef}
        style={{
          display: "flex",
          gap: "600px",
          padding: "0 10vw",
          width: `${(cardsData.length + 1) * 60}vw`, // +1 for intro card
          boxSizing: "border-box",
          zIndex: 2,
        }}
      >
        {/* Intro big card */}
        <div
          className="card intro-card"
          style={{
            minWidth: "45vw",
            minHeight: "350px",
            background: "rgba(255, 255, 255, 0.3)",
            borderRadius: "25px",
            boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
            backdropFilter: "blur(15px)",
            border: "2px solid rgba(255, 255, 255, 0.4)",
            color: "#4a0082",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "30px",
            boxSizing: "border-box",
            textAlign: "center",
            fontWeight: "600",
            transition: "transform 0.3s ease-in-out", // ✅ Hover zoom/tilt
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05) rotateY(5deg)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1) rotateY(0deg)")}
        >
          <div style={{ fontSize: "2rem", marginBottom: "20px" }}>{introCard.title}</div>
          <div style={{ fontSize: "1.2rem", lineHeight: "1.6" }}>{introCard.content}</div>
        </div>

        {/* Tech cards */}
        {cardsData.map((card, idx) => (
          <div
            className={`card ${idx === 0 ? "first-card" : ""}`}
            key={idx}
            style={{
              minWidth: idx === 0 ? "35vw" : "30vw", // First tech card is bigger
              minHeight: idx === 0 ? "320px" : "280px",
              background: "rgba(255, 255, 255, 0.2)",
              borderRadius: "20px",
              boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              color: "#4a0082",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "25px",
              boxSizing: "border-box",
              textAlign: "center",
              transition: "transform 0.3s ease-in-out",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05) rotateY(5deg)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1) rotateY(0deg)")}
          >
            <div style={{ marginBottom: "20px" }}>{card.icon}</div>
            <div style={{ fontSize: "1.5rem", fontWeight: "700", marginBottom: "10px" }}>{card.title}</div>
            <div style={{ fontSize: "1rem", lineHeight: "1.5" }}>{card.content}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SmoothParallaxScroll;
