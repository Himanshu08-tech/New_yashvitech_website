// components/AnimatedWrapper.js
import React from "react";
import { motion } from "framer-motion";

const animationVariants = {
  fadeInUp: {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  scaleIn: {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
  },
};

const AnimatedWrapper = ({
  children,
  variant = "fadeInUp",
  duration = 0.6,
  delay = 0.1,
  once = true,
  customStyle = {},
}) => {
  return (
    <motion.div
      style={customStyle}
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
      transition={{ duration, delay }}
      variants={animationVariants[variant]}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedWrapper;
