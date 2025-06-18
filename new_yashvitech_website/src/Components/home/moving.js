import React from "react";
import Image1 from "./freepik__the-style-is-3d-model-with-octane-render-volumetri__18107-removebg-preview.png";
import Image2 from "../MyImage/image-removebg-preview.png"
import Image3 from "../MyImage/istockphoto-1433420052-612x612-removebg-preview.png"
import "./Moving.css";

const StackedCards = () => {
  const cardsData = [
    {
      bg: "#f9fafb",
      title: "Frontend Frameworks",
      text: "Dive into React and build dynamic, scalable applications with reusable components and hooks. Master state management, routing, and create responsive interfaces that deliver exceptional user experiences.",
      image: Image2,
      tag: "Frontend Frameworks",
    },
    {
      bg: "#fff7ed",
      title: "Backend & APIs",
      text: "Get hands-on with Node.js and Express to build powerful backends and connect with RESTful APIs. Learn how to structure your backend efficiently and connect it with frontend systems.",
      image: Image3,
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
    <div className="stacked-container" style={{ height: `${cardsData.length * 100}vh` }}>
      {cardsData.map((card, i) => (
        <div key={i} className="stacked-card-wrapper" style={{ zIndex: i }}>
          <div className="stacked-card" style={{ backgroundColor: card.bg }}>
            {/* Left */}
            <div className="stacked-card-left">
              <div className="stacked-card-tag">{card.tag}</div>
              <h2 className="stacked-card-title">{card.title}</h2>
              <p className="stacked-card-text">{card.text}</p>
              <button className="stacked-card-button">
                Learn more →
              </button>
            </div>

            {/* Right */}
            <div className="stacked-card-right">
              <div className="stacked-card-circle"></div>
              <img
                src={card.image}
                alt={card.title}
                className="stacked-card-image"
                style={
                  card.image === Image2
                    ? { width: "300px" }
                    : card.image === Image3
                      ? { width: "325px", height: "250px", position: "relative", bottom: "20px", right: "px" }
                      : { width: "220px", zIndex: 2 }
                }
              />

            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StackedCards;
