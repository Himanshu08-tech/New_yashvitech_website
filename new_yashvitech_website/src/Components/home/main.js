import React, { useEffect, useRef, useState } from "react";
import Card from "./card";
import About from "./aboutus";
import Moving from "./moving";
import Review from "./review";
import Step from "./steps";
import "./header.css";
import Services from "./Services/Services";
import Product from "./Products/Product";
import { PiStudentBold } from "react-icons/pi";
import { SiCodementor } from "react-icons/si";
import { GoProject } from "react-icons/go";

import AnimatedWrapper from "../../framer-motion-animation/AnimatedWrapper";

const Navbar = () => {
  const statsRef = useRef();

  const [studentCount, setStudentCount] = useState(0);
  const [mentorCount, setMentorCount] = useState(0);
  const [projectCount, setProjectCount] = useState(0);

  const targetValues = {
    students: 10043,
    mentors: 63,
    projects: 180,
  };

  const animateCounts = () => {
    let current = { students: 0, mentors: 0, projects: 0 };
    const steps = 60;
    const duration = 1000;
    const intervalTime = duration / steps;

    const increment = {
      students: Math.ceil(targetValues.students / steps),
      mentors: Math.ceil(targetValues.mentors / steps),
      projects: Math.ceil(targetValues.projects / steps),
    };

    const interval = setInterval(() => {
      current.students = Math.min(
        current.students + increment.students,
        targetValues.students
      );
      current.mentors = Math.min(
        current.mentors + increment.mentors,
        targetValues.mentors
      );
      current.projects = Math.min(
        current.projects + increment.projects,
        targetValues.projects
      );

      setStudentCount(current.students);
      setMentorCount(current.mentors);
      setProjectCount(current.projects);

      if (
        current.students >= targetValues.students &&
        current.mentors >= targetValues.mentors &&
        current.projects >= targetValues.projects
      ) {
        clearInterval(interval);
      }
    }, intervalTime);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animateCounts();
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <AnimatedWrapper variant="fadeInUp" delay={0.2}>
        <section className="hero">
          <h1>
            Empower Your Career with{" "}
            <span className="highlight">Live Projects</span>
            <br />
            and Real Development Experience.
          </h1>
          <p>
            {/* Join YashviTech to gain hands-on coding skills through live
          internships and expert mentorship. */}
            Join YashviTech to build real-world coding skills through live
            internships and personalized mentorship from industry experts.
          </p>
          <button className="cta-btn">Explore Programs</button>

          <section className="stats" ref={statsRef}>
            <div className="stat-item">
              <PiStudentBold style={{ color: "#6a0dad", fontSize: "2rem" }} />
              <h2>{studentCount.toLocaleString()}+</h2>
              <p>Students Enrolled</p>
            </div>
            <div className="stat-item">
              <SiCodementor
                style={{
                  color: "#6a0dad",
                  fontSize: "2rem",
                  position: "relative",
                  right: "5px",
                }}
              />
              <h2>{mentorCount}+</h2>
              <p>Expert Mentors</p>
            </div>
            <div className="stat-item">
              <GoProject
                style={{
                  color: "#6a0dad",
                  fontSize: "2rem",
                  position: "relative",
                  right: "5px",
                }}
              />
              <h2>{projectCount}+</h2>
              <p>Live Projects</p>
            </div>
          </section>
        </section>
      </AnimatedWrapper>

      <AnimatedWrapper variant="fadeInUp" delay={0.2}>
        <section>
          <Card />
        </section>
      </AnimatedWrapper>

      <AnimatedWrapper variant="fadeInUp" delay={0.2}>
        <section>
          <Moving />
        </section>
      </AnimatedWrapper>

      <AnimatedWrapper variant="fadeInUp" delay={0.2}>
        <section>
          <Services />
        </section>
      </AnimatedWrapper>
      <AnimatedWrapper variant="fadeInUp" delay={0.2}>
        <section>
          <Product />
        </section>
      </AnimatedWrapper>

      <AnimatedWrapper variant="fadeInUp" delay={0.2}>
        <section style={{ marginTop: "40px" }}>
          <Step />
        </section>
      </AnimatedWrapper>

      <AnimatedWrapper variant="fadeInUp" delay={0.2}>
        <section>
          <Review />
        </section>
      </AnimatedWrapper>
    </>
  );
};

export default Navbar;
