import React, { useRef } from "react";
import { Carousel } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import Image1 from "./freepik__the-style-is-3d-model-with-octane-render-volumetri__18107-removebg-preview.png";
import "./moving.css";

const StackedCards = () => {
  const carouselRef = useRef();

  const cardsData = [
    {
      id: 1,
      bg: "#f9fafb",
      title: "Frontend Frameworks",
      text: "Dive into React and build dynamic, scalable applications with reusable components and hooks...",
      image: Image1,
      tag: "Frontend Frameworks",
    },
    {
      id: 2,
      bg: "#fff7ed",
      title: "Backend & APIs",
      text: "Get hands-on with Node.js and Express to build powerful backends and connect with RESTful APIs...",
      image: Image1,
      tag: "Backend Development",
    },
    {
      id: 3,
      bg: "#fef2f2",
      title: "Deployment & Optimization",
      text: "Understand how to deploy, optimize performance, and maintain secure, production-ready web apps...",
      image: Image1,
      tag: "DevOps & Deployment",
    },
  ];

  return (
    <div className="carousel-wrapper">
      <Carousel ref={carouselRef} dots autoplay autoplaySpeed={5000}>
        {cardsData.map((card, i) => (
          <div key={i}>
            <div className="carousel-center-wrapper">
              <div className="card-container" style={{ backgroundColor: card.bg }}>
                <div className="card-content">
                  <div className="card-tag">{card.tag}</div>
                  <h2>{card.title}</h2>
                  <p>{card.text}</p>
                  <button>Learn more →</button>
                </div>
                <div className="card-image-wrapper">
                  <div className="bg-circle" />
                  <img src={card.image} alt={card.title} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>

      {/* Custom Arrows */}
      <div style={{display:"flex", gap:"470px"}}>
      <button className="arrow-btn prev" onClick={() => carouselRef.current.prev()}>
        <LeftOutlined />
      </button>
      <button className="arrow-btn next" onClick={() => carouselRef.current.next()}>
        <RightOutlined />
      </button>
      </div>
    </div>
  );
};

export default StackedCards;
