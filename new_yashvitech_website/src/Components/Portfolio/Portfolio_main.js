import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../Portfolio/Portfolio_main.css';

gsap.registerPlugin(ScrollTrigger);

const PortfolioTitlePage = () => {
  const containerRef = useRef();
  const titleRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=800',
          scrub: true,
          pin: true,
        },
      }).to(titleRef.current, {
        scale: 0.4,
        ease: 'power2.out',
        transformOrigin: 'center center',
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="portfolio-title-section">
      <h1 ref={titleRef} className="portfolio-title">PORTFOLIO</h1>
    </section>
  );
};

export default PortfolioTitlePage;



// import React, { useRef, useEffect } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import '../Style/Profile_main.css';

// gsap.registerPlugin(ScrollTrigger);

// const PortfolioTitlePage = () => {
//   const containerRef = useRef();
//   const titleRef = useRef();

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.timeline({
//         scrollTrigger: {
//           trigger: containerRef.current,
//           start: 'top top',
//           end: '+=800',
//           scrub: true,
//           pin: true,
//         },
//       }).to(titleRef.current, {
//         scale: 0.4,
//         ease: 'power2.out',
//         transformOrigin: 'center center',
//       });
//     }, containerRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section ref={containerRef} className="portfolio-title-section">
//       <h1 ref={titleRef} className="portfolio-title">portfolio</h1>
//     </section>
//   );
// };

// export default PortfolioTitlePage;
