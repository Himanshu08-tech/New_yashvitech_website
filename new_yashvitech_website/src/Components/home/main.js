import React from "react";
import Card from "./card";
import About from "./aboutus";
import Moving from "./moving";
import Review from "./review";
import Headers from "./header";
import Step from "./steps";
import Footer from "./footer";
import "./header.css";

const Navbar = () => {
  return (
    <>
      {/* <section><Headers></Headers></section> */}
      <section className="hero">
        <h1>
          Empower Your Career with{" "}
          <span className="highlight">Live Projects</span>
          <br />
          and Real Development Experience.
        </h1>
        <p>
          Join YashviTech to gain hands-on coding skills through live
          internships and expert mentorship.
        </p>
        <button className="cta-btn">Explore Programs</button>
        <section className="stats">
          <div className="stat-item">
            <h2>10K+</h2>
            <p>Students Enrolled</p>
          </div>
          <div className="stat-item">
            <h2>50+</h2>
            <p>Expert Mentors</p>
          </div>
          <div className="stat-item">
            <h2>100+</h2>
            <p>Live Projects</p>
          </div>
        </section>
      </section>
      
      <section>
        <Card></Card>
      </section>
      <section>
        <Moving></Moving>
      </section>

      <section style={{ marginTop: "40px" }}>
        <Step></Step>
      </section>
      <section>
        <Review></Review>
      </section>
      <section>
        <Footer></Footer>
      </section>
    </>
  );
};

export default Navbar;
