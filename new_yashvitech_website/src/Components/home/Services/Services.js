import React from 'react';
import './Services.css';
import { Link } from 'react-router-dom';
import AnimatedWrapper from '../../../framer-motion-animation/AnimatedWrapper'

function Services() {

   const services = [
      {
         icon: "👩🏻‍💻",
         title: "Software Development",
         description: "Yashvitech IT Solutions delivers customized software development to streamline business processes and drive growth.",
      },
      {
         icon: "🌐",
         title: "Web App Development",
         description: "Yashvitech IT Solution delivers innovative web design and development for a strong online presence.",
      },
      {
         icon: "🤖",
         title: "Android App Development",
         description: "Yashvitech IT Solution specializes in creating intuitive, high-performance, user-friendly, innovative Android apps.",
      },
      {
         icon: "🎨",
         title: "Website Designing",
         description: "Yashvitech IT Solution designs unique and professional websites that enhance online presence and user engagement.",
      },
      {
         icon: "✨",
         title: "Creative Solution",
         description: "Yashvitech IT Solution provides innovative, result-driven, and scalable creative solutions tailored to elevate your business growth and digital presence."
      },
      {
         icon: "✨",
         title: "Creative Solution",
         description: "Yashvitech IT Solution provides innovative, result-driven, and scalable creative solutions tailored to elevate your business growth and digital presence."
      },
   ];
   return (
      <AnimatedWrapper variant="fadeInUp" delay={0.2}>
         <section className="services">
            <h2 className="services-heading">
               {/* <span className="small-heading">Our Services</span><br /> */}
               Delivering Top-Tier IT Solutions & Professional <br />
               <span className="highlight">Services</span>
            </h2>
            <div className="services-flex">
               {services.map((service, index) => (
                  <div className="service-card" key={index}>
                     <div className="card-inner">
                        <div className="card-front">
                           <div className="service-icon">{service.icon}</div>
                           <h3>{service.title}</h3>
                           <div className="description">
                              <p>{service.description}</p>
                           </div>
                        </div>

                        <div className="card-back">
                           <p>Want to know more?</p>
                           <Link to='/readmore'><button className="read-more-btn">READ MORE →</button></Link>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </section>
      </AnimatedWrapper>
   );
}
// function Services() {
//    return (
//       <section className="services">
//          <h2 className="services-heading">
//             <span className="small-heading">• SERVICES WE PROVIDE</span><br />
//             All Professional We’re Offering Best <br />
//             IT Solutions & <span className="highlight">Services</span>
//          </h2>
//          <div className="services-flex">
//             {services.map((service, index) => (
//                {/* <div className="service-card" key={index}>
//                   <div className="service-icon">{service.icon}</div>
//                   <h3>{service.title}</h3>
//                   <div className='description'>
//                      <p>{service.description}</p>
//                   </div>
//                   <button className="read-more-btn">READ MORE &#8594;</button>
//                </div> */}



//             ))}
//          </div>
//       </section>
//    );
// }

export default Services;
