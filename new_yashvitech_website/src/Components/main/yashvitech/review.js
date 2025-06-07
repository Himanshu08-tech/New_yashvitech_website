import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const reviews = {
  clients: [
    { name: "Client A", review: "Great service, highly recommend!" },
    { name: "Client B", review: "Professional team and top-notch results." },
    { name: "Client C", review: "Amazing experience working with them." },
  ],
  students: [
    { name: "Student X", review: "Learned so much, fantastic mentors!" },
    { name: "Student Y", review: "Best training experience ever." },
    { name: "Student Z", review: "I landed a job thanks to them!" },
  ],
};

const ReviewSection = () => {
  useEffect(() => {
    // Animate Client Reviews
    gsap.utils.toArray(".client-card-row").forEach((row, i) => {
      gsap.fromTo(
        row.children,
        { opacity: 0, x: -100 },
        {
          opacity: 1,
          x: 0,
          stagger: 0.2,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: row,
            start: "top 80%",
          },
        }
      );
    });

    // Animate Student Reviews
    gsap.utils.toArray(".student-card-row").forEach((row, i) => {
      gsap.fromTo(
        row.children,
        { opacity: 0, x: 100 },
        {
          opacity: 1,
          x: 0,
          stagger: 0.2,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: row,
            start: "top 80%",
          },
        }
      );
    });
  }, []);

  return (
    <div style={{ padding: "60px 20px", background: "#fff" }}>
      {/* Client Reviews */}
      <section style={{ marginBottom: "60px" }}>
        <h2 style={{ textAlign: "center", fontSize: "2rem", marginBottom: "40px" }}>
          Client Reviews
        </h2>
        <div className="client-card-row" style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
          {reviews.clients.map((item, index) => (
            <div
              key={index}
              style={{
                background: "#fff",
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
                flex: "1 1 250px",
                maxWidth: "300px",
                minHeight: "150px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h3 style={{ fontSize: "1.2rem", marginBottom: "10px" }}>{item.name}</h3>
              <p style={{ color: "#555", textAlign: "center" }}>{item.review}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Student Reviews */}
      <section>
        <h2 style={{ textAlign: "center", fontSize: "2rem", marginBottom: "40px" }}>
          Student Reviews
        </h2>
        <div className="student-card-row" style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
          {reviews.students.map((item, index) => (
            <div
              key={index}
              style={{
                background: "#fff",
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
                flex: "1 1 250px",
                maxWidth: "300px",
                minHeight: "150px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h3 style={{ fontSize: "1.2rem", marginBottom: "10px" }}>{item.name}</h3>
              <p style={{ color: "#555", textAlign: "center" }}>{item.review}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ReviewSection;
