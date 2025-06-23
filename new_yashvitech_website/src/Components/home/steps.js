import React from 'react';
import './Step.css';

import AnimatedWrapper from '../../framer-motion-animation/AnimatedWrapper'


const NoomoHeroFull = () => {
  return (
          <AnimatedWrapper variant="fadeInUp" delay={0.2}>
    
    <section className="noomo-hero-section">
      {/* Left Side Big Text */}
      <div className="noomo-hero-left">
        <div>GREAT WORK</div>
        <div>CAN'T HAPPEN</div>
        <div>
          WITHOUT <span>TEAM.</span>
        </div>
      </div>

      {/* Right Side Paragraph */}
      <div className="noomo-hero-right">
        <p>
          When working with us, you get the value of working with founders.
          Building strong relationships with our clients is at the heart of our approach.
        </p>
        <p>
          We take the time to understand your unique needs and create tailored
          design solutions to help you make an impact.
        </p>
      </div>
    </section>
    </AnimatedWrapper>
  );
};

export default NoomoHeroFull;
