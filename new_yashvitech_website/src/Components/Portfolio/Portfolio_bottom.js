import React, { useRef, useEffect } from "react";
import "../Portfolio/Portfolio_bottom.css";
import gsap from "gsap";
import Apsh from "../Images/apsh.jpg";
import bill_zap from "../Images/bill_zap.jpg";
import courier from "../Images/courier&logistics.jpg";
import ddc from "../Images/ddc.jpg";
import krishna from "../Images/krishna.jpg";
import Shankar from "../Images/shankar_machenics.png";
import portfolio from "../Images/portfolio.3.bddebbb975ff8ef01ae4.jpg";
import priyanshi from "../Images/priyanshi.jpg";
import rupesh from "../Images/rupesh.jpg";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AnimatedSection = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    const totalScrollWidth = cardsRef.current.scrollWidth;
    const windowWidth = window.innerWidth;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=2000",
        scrub: true,
        pin: true,
      },
    });

    // Shrink and move title to bottom-left
    tl.to(titleRef.current, {
      scale: 0.5,
      x: () => -window.innerWidth / 2 + 180, // left se 60px margin ke liye adjust karo
      y: () => window.innerHeight / 2 - 130, // bottom se 60px margin ke liye adjust karo
      ease: "power2.out",
    });

    // Move cards from right to left fully
    tl.to(
      cardsRef.current,
      {
        x: -(totalScrollWidth + 100), // Adjust extra for smooth scroll end
        ease: "none",
      },
      "<+0.5"
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const cards = [
    { image: Apsh, link: "https://apsmarthomes.com/" },
    { image: bill_zap, link: "https://billzap.in/" },
    { image: courier, link: "https://example.com/courier" },
    { image: ddc, link: "https://example.com/ddc" },
    { image: krishna, link: "https://shreekrishnapowertools.com/" },
    { image: Shankar, link: "https://example.com/shankar" },
    { image: portfolio, link: "https://myvehicles.in/lander" },
    { image: priyanshi, link: "https://priyanshi.coalfeed.in/" },
    { image: rupesh, link: "https://rupeshgrahaksevakendra.com/" },
  ];

  return (
    <div className="container" ref={containerRef}>
      <h1 className="title" ref={titleRef}>
        Designed to Inspire, Built to Perform
      </h1>

      <div className="cards-wrapper" ref={cardsRef}>
        {cards.map((card) => (
          <div className="scroll-card" key={card.id}>
            <img src={card.image} alt={card.text} className="card-image" />
            <a
              href={card.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: "#333",
                marginTop: "10px",
              }}
            >
              <p>{card.link}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedSection;
