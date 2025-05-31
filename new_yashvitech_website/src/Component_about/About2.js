import React, { useRef, useState, useEffect } from "react";
import "../Styles/about1.css";
import Image1 from "../Images/image1.jpg";
import Image2 from "../Images/image2.jpg";
import Image3 from "../Images/image3.jpg";
import Image4 from "../Images/image4.jpg";

const sections = [
  {
    title: "The Company",
    image: Image1,
    content:
      "Yashvitech IT Solution is the architect of our digital world, responsible for creating software applications, IT services, and technologies that define modern life.",
  },
  {
    title: "Our Mission",
    image: Image2,
    content:
      "At Yashvitech IT Solution, our mission is to harness the power of technology to drive innovation, empower businesses, and enrich lives.",
  },
  {
    title: "Our Vision",
    image: Image3,
    content:
      "Our vision is to be at the forefront of shaping a digital future where technology transforms lives, businesses, and societies.",
  },
  {
    title: "Our Team",
    image: Image4,
    content:
      "We are driven by the belief that innovation has the power to create positive change and drive progress in a rapidly evolving world.",
  },
];

function About2() {
  const textRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.dataset.index);
            setActiveIndex(idx);
          }
        });
      },
      { threshold: 0.6 }
    );

    textRefs.current.forEach((ref) => ref && observer.observe(ref));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="about-container">
      <h1 className="animated-heading">CREATIVE DEVELOPER</h1>
      <div className="split-layout">
        <div className="split-left">
          <img
            src={sections[activeIndex].image}
            alt="section visual"
            className="split-image"
          />
        </div>
        <div className="split-right">
          {sections.map((section, index) => (
            <div
              className={`split-section ${activeIndex === index ? "visible" : ""}`}
              key={index}
              data-index={index}
              ref={(el) => (textRefs.current[index] = el)}
            >
              <h2>{section.title}</h2>
              <p>{section.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About2;
