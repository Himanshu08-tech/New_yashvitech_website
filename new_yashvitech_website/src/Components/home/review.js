import React from "react";
import "./Review.css";

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

const ReviewSection = () => {
  const renderCards = (data) =>
    [...data, ...data].map((item, index) => (
      <div className="review-card" key={index}>
        <p className="review-text">{item.review}</p>
        <strong className="review-author">{item.name}</strong>
      </div>
    ));

  return (
    <div className="review-section">
      {/* Client Reviews */}
      {/* <h2 className="review-heading">What Our Clients Say</h2> */}
      <h2 className="review-heading">Insights from Our Clients</h2>
      <div className="scroll-container" style={{ marginBottom: "80px" }}>
        <div className="scroll-track">
          {renderCards(reviews.clients)}
        </div>
      </div>

      {/* Student Reviews */}
      {/* <h2 className="review-heading">What Our Students Say</h2> */}
      <h2 className="review-heading">Insights from Our Students</h2>
      <div className="scroll-container">
        <div className="scroll-track slow">
          {renderCards(reviews.students)}
        </div>
      </div>

    </div>
  );
};

export default ReviewSection;
