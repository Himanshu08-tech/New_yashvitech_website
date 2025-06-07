import React from "react";

const reviews = {
  clients: [
    { name: "Client A", review: "Great service, highly recommend!" },
    { name: "Client B", review: "Professional team and top-notch results." },
    { name: "Client C", review: "Amazing experience working with them." },
    { name: "Client D", review: "Their creativity blew us away!" },
    { name: "Client E", review: "Truly professional and timely delivery." },
    { name: "Client F", review: "Transformed our vision into reality." },
  ],
  students: [
    { name: "Student X", review: "Learned so much, fantastic mentors!" },
    { name: "Student Y", review: "Best training experience ever." },
    { name: "Student Z", review: "I landed a job thanks to them!" },
    { name: "Student Q", review: "Supportive and hands-on learning." },
    { name: "Student R", review: "Mentorship was beyond expectations." },
  ],
};

const keyframes = `
@keyframes scrollLeft {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
`;

const scrollTrackStyle = (duration = "50s") => ({
  display: "inline-flex",
  animation: `scrollLeft ${duration} linear infinite`,
});

const ReviewSection = () => {
  const renderCards = (data) =>
    [...data, ...data].map((item, index) => (
      <div
        key={index}
        style={{
          flex: "0 0 auto",
          width: "300px",
          margin: "0 12px",
          padding: "24px",
          borderRadius: "16px",
          background: "#ffffff",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.05)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          transition: "transform 0.3s",
        }}
      >
        <p style={{ fontSize: "0.95rem", color: "#374151", lineHeight: "1.6", marginBottom: "20px" }}>
          {item.review}
        </p>
        <strong style={{ color: "#111827", fontSize: "1rem" }}>{item.name}</strong>
      </div>
    ));

  return (
    <div
      style={{
         background: 'radial-gradient(circle at bottom left, #f3e7ff, #fbeaff, #e0f1ff, #ffece6, #ffffff)',
        padding: "80px 20px",
        fontFamily: "Inter, sans-serif",
        overflow: "hidden",
      }}
    >
      <style>{keyframes}</style>
      <style>{`
        .scroll-container {
          overflow: hidden;
          position: relative;
          white-space: nowrap;
        }
        .scroll-track {
          display: inline-flex;
        }
        .scroll-container:hover .scroll-track {
          animation-play-state: paused;
        }
      `}</style>

      {/* Client Reviews */}
      <h2 style={{ textAlign: "center", fontSize: "2.2rem", color: "#1e1b4b", marginBottom: "40px" }}>
        What Our Clients Say
      </h2>
      <div className="scroll-container" style={{ marginBottom: "80px" }}>
        <div className="scroll-track" style={scrollTrackStyle("50s")}>
          {renderCards(reviews.clients)}
        </div>
      </div>

      {/* Student Reviews */}
      <h2 style={{ textAlign: "center", fontSize: "2.2rem", color: "#1e1b4b", marginBottom: "40px" }}>
        What Our Students Say
      </h2>
      <div className="scroll-container">
        <div className="scroll-track" style={scrollTrackStyle("55s")}>
          {renderCards(reviews.students)}
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;
