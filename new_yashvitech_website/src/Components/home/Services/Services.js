import React from 'react';
import './Services.css';

const services = [
   {
      icon: "💻",
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
      description: "Yashvitech IT Solution provides innovative, result-driven creative solutions for your business.",
   },
];

function Services() {
   return (
      <section className="services">
         <h2 className="services-heading">
            <span className="small-heading">• SERVICES WE PROVIDE</span><br />
            All Professional We’re Offering Best <br />
            IT Solutions & <span className="highlight">Services</span>
         </h2>
         <div className="services-grid">
            {services.map((service, index) => (
               <div className="service-card" key={index}>
                  <div className="service-icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <button className="read-more-btn">READ MORE &raquo;</button>
               </div>
            ))}
         </div>
      </section>
   );
}

export default Services;
