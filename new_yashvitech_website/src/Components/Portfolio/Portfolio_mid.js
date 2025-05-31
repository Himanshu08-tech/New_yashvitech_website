import React, { useRef } from "react";
import "../Portfolio/Portfolio_mid.css";
import { FaSearch, FaBookmark, FaBookOpen } from "react-icons/fa";
import { motion, useInView } from "framer-motion";

const steps = [
  {
    icon: <FaSearch className="icon" />,
    title: "Strategy-Driven Discovery",
    text: "We start by understanding your goals and audience to shape a personalized, result-focused roadmap. Every step is planned with clarity and strategic intent.",
  },
  {
    icon: <FaBookmark className="icon" />,
    title: "Design-Led Development",
    text: "Our team crafts stunning, user-friendly designs and builds responsive digital solutions. We blend creativity with modern tech for optimal performance.",
  },
  {
    icon: <FaBookOpen className="icon" />,
    title: "Seamless Launch & Beyond",
    text: "After rigorous testing, we ensure a flawless launch with zero disruptions. We continue to support and optimize your project post-launch.",
  },
];

// Animation Variants
const iconVariants = {
  hidden: { x: -100, opacity: 0 },
  visible: (delay) => ({
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay },
  }),
};

const lineVariants = {
  hidden: { height: 0, opacity: 0 },
  visible: (delay) => ({
    height: "60px",
    opacity: 1,
    transition: { duration: 1.5, delay },
  }),
};

const HowItWorks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="how-it-works-container" ref={ref}>
      <motion.h2
        className="heading"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
      >
        How Our Services Work?
      </motion.h2>

      <div className="steps-container">
        {steps.map((step, index) => (
          <div className="step" key={index}>
            <div className="icon-wrapper">
              <motion.div
                custom={index * 0.4}
                variants={iconVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                {step.icon}
              </motion.div>

              {index < steps.length - 1 && (
                <motion.div
                  className="line"
                  custom={index * 0.4 + 0.6}
                  variants={lineVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                />
              )}
            </div>

            <motion.div
              className="content"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.5 + 0.5, duration: 0.6 }}
            >
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
