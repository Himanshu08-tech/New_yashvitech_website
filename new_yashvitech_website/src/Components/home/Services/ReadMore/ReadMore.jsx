import React from "react";
import "./ReadMore.css";
import { Link } from "react-router-dom";

const services = [
   {
      icon: "💻",
      title: "Software Development",
      description: `At Yashvitech IT Solutions, we specialize in building robust and scalable software tailored to your unique business needs. 
From enterprise applications to custom platforms, we ensure that our software solutions are secure, efficient, and aligned with your goals. 
Our team leverages modern technologies and development methodologies like Agile and DevOps to deliver high-performance software products. 
We also ensure ongoing maintenance, upgrades, and support so your systems evolve with your business. 
Whether it's CRM, ERP, HRMS, or any business automation software, we develop end-to-end solutions. 
Integration with third-party services, cloud infrastructure, and advanced analytics are key to our delivery model. 
`,
   },
   {
      icon: "🌐",
      title: "Web App Development",
      description:
         `Our web development services empower businesses with fast, responsive, and secure web applications. 
Yashvitech builds custom front-end and back-end systems that are easy to use and optimized for performance. 
Whether you're a startup or enterprise, we craft web apps that scale with your growth. 
Our UI/UX designers work closely to ensure elegant and intuitive designs. 
We use React, Angular, Node.js, and other modern stacks for seamless experiences. 
Each project starts with in-depth research and planning to match your business logic. 
Features like authentication, dashboards, APIs, and admin panels are fully customized. 
We ensure mobile responsiveness across all devices and screen sizes. 
Security best practices such as HTTPS, encryption, and user role management are built-in.`.replace(
            /\n/g,
            " "
         ),
   },
   {
      icon: "🤖",
      title: "Android App Development",
      description:
         `We create high-performance Android apps tailored to your business objectives and audience. 
Our team uses Java, Kotlin, and Jetpack libraries to build stable, responsive, and modern apps. 
We ensure a balance of functionality, design, and user engagement. 
Our app development process begins with planning, wireframing, and prototyping. 
Apps are fully native or hybrid depending on your needs and budget. 
Every app is optimized for speed, battery usage, and device compatibility. 
We follow strict Material Design guidelines to ensure intuitive user experience. 
Push notifications, geolocation, camera, and offline access can be integrated. 
Security is built-in using encryption, biometric login, and secure APIs. 
We also provide admin panels for content management and real-time analytics.`.replace(
            /\n/g,
            " "
         ),
   },
   {
      icon: "🎨",
      title: "Website Designing",
      description:
         `Yashvitech designs beautiful, modern, and functional websites that leave lasting impressions. 
Our approach is centered around user experience, visual appeal, and branding. 
We begin with deep understanding of your business, goals, and audience. 
Wireframes and mockups are created to visualize layout and structure. 
Each site is responsive — optimized for desktop, tablet, and mobile users. 
We ensure accessibility for users with disabilities and WCAG compliance. 
Animations, transitions, and interactivity are tastefully integrated. 
We design with performance in mind to ensure fast load times. 
SEO-friendly structures and meta elements are built-in for ranking. 
From landing pages to complex corporate sites, we handle it all. 
 `.replace(/\n/g, " "),
   },
   {
      icon: "✨",
      title: "Creative Solution",
      description: `We offer creative solutions that merge design, innovation, and technology to solve real business challenges. 
Our team specializes in branding, digital storytelling, motion graphics, and visual strategy. 
Yashvitech crafts compelling designs that resonate with your target audience. 
Whether you're launching a product, campaign, or brand identity — we help bring ideas to life. 
Our solutions include logo design, visual identity, interactive presentations, and creative content. 
We combine aesthetic appeal with business relevance and user engagement. 
The process begins with brainstorming and ends in powerful creative delivery. 
Animation, illustration, video editing, and 3D visuals are part of our toolkit. 

.`,
   },
];

const ReadMore = () => {
   return (
      <div className="detail-container">
         {/* <h2 className="detail-heading">Explore Our Services in Detail</h2> */}
         <div className="detail-flex">
            {services.map((service, index) => (
               <div className="detail-card" key={index}>
                  <div className="detail-icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <div className="description">
                     <p>{service.description}</p>
                  </div>
                  <Link to="/">
                     <button className="back-btn">Back</button>{" "}
                  </Link>
               </div>
            ))}
         </div>
      </div>
   );
};

export default ReadMore;
