import React from "react";
import Image1 from "./freepik__the-style-is-3d-model-with-octane-render-volumetri__18107-removebg-preview.png";

const StackedCards = () => {
  const cardsData = [
    {
      bg: "#F5F7F4",
      title: "Frontend Frameworks",
      text: "Dive into React and build dynamic, scalable applications with reusable components and hooks.Dive into React and build dynamic, scalable applications with reusable components and hooks.",
      image: Image1, // replace with your image URL
    },
    {
      bg: "#F2C7A7",
      title: "Backend & APIs",
      text: "Get hands-on with Node.js and Express to build powerful backends and connect with RESTful APIs.Dive into React and build dynamic, scalable applications with reusable components and hooks.",
      image: Image1,
    },
    {
      bg: "#ECD4E2",
      title: "Deployment & Optimization",
      text: "Understand how to deploy, optimize performance, and maintain secure, production-ready web apps.Dive into React and build dynamic, scalable applications with reusable components and hooks.",
      image: Image1,
    },
  ];

  return (
    <div
      style={{ height: `${cardsData.length * 100}vh`, position: "relative" }}
    >
      {cardsData.map((card, i) => (
        <div
        key={i}
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          position: "sticky",
          top: 0,
          zIndex: i,
        }}
      >
        <div
          style={{
            width: "40%",
            height: "100vh",
            position: "relative",  // ✅ Add this!
            display: "flex",
            alignItems: "start",
            justifyContent: "start",
            background: card.bg,
            borderRadius: "5%",
            padding: "40px",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: "400px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h2
              style={{
                fontSize: "1.6rem",
                marginBottom: "1rem",
                color: "#000",
              }}
            >
              {card.title}
            </h2>
            <p
              style={{
                fontSize: "0.95rem",
                color: "#333",
                lineHeight: "1.5",
              }}
            >
              {card.text}
            </p>
          </div>
      
          {/* ✅ Image absolutely positioned */}
          <div
            style={{
              position: "absolute",
              bottom: "10%",
              right: "20px",
            }}
          >
            <img
              src={card.image}
              alt={card.title}
              style={{
                width:"350px",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </div>
      
      ))}
    </div>
  );
};

export default StackedCards;
