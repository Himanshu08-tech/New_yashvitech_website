import React from "react";
import Image1 from "./freepik__the-style-is-3d-model-with-octane-render-volumetri__18107-removebg-preview.png"; // use the uploaded image

const StackedCards = () => {
  const cardsData = [
    {
      bg: "#f9fafb",
      title: "Frontend Frameworks",
      text: "Dive into React and build dynamic, scalable applications with reusable components and hooks. Master state management, routing, and create responsive interfaces that deliver exceptional user experiences.",
      image: Image1,
      tag: "Frontend Frameworks",
    },
    {
      bg: "#fff7ed",
      title: "Backend & APIs",
      text: "Get hands-on with Node.js and Express to build powerful backends and connect with RESTful APIs. Learn how to structure your backend efficiently and connect it with frontend systems.",
      image: Image1,
      tag: "Backend Development",
    },
    {
      bg: "#fef2f2",
      title: "Deployment & Optimization",
      text: "Understand how to deploy, optimize performance, and maintain secure, production-ready web apps. Learn about CI/CD, hosting, and caching strategies.",
      image: Image1,
      tag: "DevOps & Deployment",
    },
  ];

  return (
    <div style={{ height: `${cardsData.length * 100}vh`, position: "relative", padding: "40px 0" }}>
      {cardsData.map((card, i) => (
        <div
          key={i}
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            position: "sticky",
            top: 120,
            zIndex: i,
          }}
        >
          <div
            style={{
              width: "50%",
              height: "550px",
              display: "flex",
              borderRadius: "20px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
              overflow: "hidden",
              backgroundColor: card.bg,
            }}
          >
            {/* Left content */}
            <div
              style={{
                flex: 1,
                padding: "40px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  backgroundColor: "#eaf0ff",
                  padding: "5px 15px",
                  borderRadius: "999px",
                  color: "#2a60ff",
                  fontWeight: "600",
                  fontSize: "0.85rem",
                  marginBottom: "10px",
                  width: "fit-content",
                }}
              >
                {card.tag}
              </div>
              <h2 style={{ fontSize: "1.8rem", marginBottom: "15px", color: "#1f2937" }}>
                {card.title}
              </h2>
              <p style={{ fontSize: "1rem", lineHeight: "1.6", color: "#4b5563", marginBottom: "20px" }}>
                {card.text}
              </p>
              <button
                style={{
                  backgroundColor: "#2a60ff",
                  color: "#fff",
                  padding: "10px 20px",
                  border: "none",
                  borderRadius: "8px",
                  fontSize: "1rem",
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                Learn more →
              </button>
            </div>

            {/* Right image & design */}
            <div
              style={{
                flex: 1,
                backgroundColor: "#eaf0ff",
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  width: "200px",
                  height: "200px",
                  borderRadius: "50%",
                  background: "radial-gradient(circle, #60a5fa, #3b82f6)",
                  opacity: 0.4,
                  position: "absolute",
                  top: "30%",
                  left: "30%",
                  transform: "translate(-30%, -30%)",
                }}
              ></div>
              <img
                src={card.image}
                alt={card.title}
                style={{ width: "220px", zIndex: 2 }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StackedCards;
