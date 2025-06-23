import React from 'react'
import About from './About'
import About1 from "./About1"
import About2 from "./About2"
import AnimatedWrapper from '../../framer-motion-animation/AnimatedWrapper'

function mainabout() {
  return (
    <>
      <AnimatedWrapper variant="fadeInUp" delay={0.2}>
        <About />
      </AnimatedWrapper>
      <AnimatedWrapper variant="fadeInUp" delay={0.2}>

        <About1 />
      </AnimatedWrapper>
      <AnimatedWrapper variant="fadeInUp" delay={0.2}>

        <About2 />
      </AnimatedWrapper>

    </>
  )
}

export default mainabout