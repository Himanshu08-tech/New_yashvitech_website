import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image1 from "./freepik__background__94211.png";

// Register the GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const AboutUsSection = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    // Section title animation
    gsap.fromTo(
      aboutRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 80%",
        },
      }
    );

    // Animate each card with a 3D flip & reveal
    
    
  }, []);

  return (
    <div>
      {/* About Us Section */}
      <section
        style={{
          padding: "80px 20px",
          textAlign: "center",
          background: "#fff",
        }}
      >
        <div ref={aboutRef}>
          <h2
            style={{
              fontSize: "2.5rem",
              fontWeight: "bold",
              marginBottom: "10px",
            }}
          >
            Building Future Developers at YashviTech
          </h2>
          <p
            style={{
              fontSize: "1.1rem",
              color: "#777",
              marginBottom: "50px",
            }}
          >
            We empower students with real-world skills through expert-led training and internships in Web & App Development.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "30px",
            maxWidth: "1000px",
            margin: "0 auto",
          }}
        >
          {/* Card 1 */}
          <div
            className="card"
            style={{
              flex: "1 1 300px",
              background: "#f9f9f9",
              borderRadius: "15px",
              padding: "20px",
              textAlign: "left",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform =
                "perspective(1000px) rotateY(10deg) scale(1.05)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "rotateY(0deg) scale(1)")
            }
          >
            <img
              src={Image1}
              alt="Web Development Training"
              style={{
                width: "100%",
                borderRadius: "15px",
                marginBottom: "20px",
                
                
              }}
            />
            <div
              style={{
                fontSize: "0.9rem",
                fontWeight: "bold",
                color: "#6C63FF",
                marginBottom: "5px",
              }}
            >
              01
            </div>
            <h3 style={{ fontSize: "1.5rem", marginBottom: "10px" }}>
              Web Development Training
            </h3>
            <p style={{ fontSize: "1rem", color: "#555" }}>
              Dive into front-end & back-end technologies, mastering HTML, CSS, JavaScript, React, Node.js, and more with hands-on projects.
            </p>
          </div>

          {/* Card 2 */}
          <div
            className="card"
            style={{
              flex: "1 1 300px",
              background: "#f9f9f9",
              borderRadius: "15px",
              padding: "20px",
              textAlign: "left",
              boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform =
                "perspective(1000px) rotateY(10deg) scale(1.05)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "rotateY(0deg) scale(1)")
            }
          >
            <img
              src={Image1}
              alt="App Development Training"
              style={{
                width: "100%",
                borderRadius: "15px",
                marginBottom: "20px",
                
              }}
            />
            <div
              style={{
                fontSize: "0.9rem",
                fontWeight: "bold",
                color: "#6C63FF",
                marginBottom: "5px",
              }}
            >
              02
            </div>
            <h3 style={{ fontSize: "1.5rem", marginBottom: "10px" }}>
              App Development Training
            </h3>
            <p style={{ fontSize: "1rem", color: "#555" }}>
              Learn to build mobile apps with Flutter & React Native, gain skills in UI/UX design, and develop full-fledged Android/iOS apps.
            </p>
          </div>

          {/* Card 3 */}
          <div
            className="card"
            style={{
              flex: "1 1 300px",
              background: "#f9f9f9",
              borderRadius: "15px",
              padding: "20px",
              textAlign: "left",
              boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform =
                "perspective(1000px) rotateY(10deg) scale(1.05)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "rotateY(0deg) scale(1)")
            }
          >
            <img
              src={Image1}
              alt="Internship & Placement Support"
              style={{
                width: "100%",
                borderRadius: "15px",
                marginBottom: "20px",
              }}
            />
            <div
              style={{
                fontSize: "0.9rem",
                fontWeight: "bold",
                color: "#6C63FF",
                marginBottom: "5px",
              }}
            >
              03
            </div>
            <h3 style={{ fontSize: "1.5rem", marginBottom: "10px" }}>
              Internships & Placements
            </h3>
            <p style={{ fontSize: "1rem", color: "#555" }}>
              Gain real-world experience with internship programs, plus career support and placement assistance to kickstart your tech journey.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsSection;
