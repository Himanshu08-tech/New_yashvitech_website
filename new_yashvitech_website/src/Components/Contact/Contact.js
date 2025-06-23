import React, { useState } from 'react';
import './Contact.css';
import AnimatedWrapper from '../../framer-motion-animation/AnimatedWrapper'

const FAQItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-item ${open ? 'open' : ''}`} onClick={() => setOpen(!open)}>
      <div className="faq-question">{question}</div>
      {open && <div className="faq-answer">{answer}</div>}
    </div>
  );
};

const GetInTouch = () => {
  return (

    <div className="get-in-touch">
      {/* <h1>Get in touch with <span className="highlight"></span></h1> */}
      <h1> Let's Get In Touch<span className="highlight"></span></h1>
      <AnimatedWrapper variant="fadeInUp" delay={0.2}>

        <div className="contact-container">
          <div className="contact-form">
            <h3>Send a Message</h3>
            {/* <p>Pellentesque in ipsum id orci porta dapibus. Quisque velit nisi, pretium ut lacinia in, elementum id enim.</p> */}
            <p style={{ position: "relative", left: "8px" }}>
              Or just reach out manually to{" "}
              <a
                href="mailto:info@yashvitech.com"
                style={{ color: "purple", textDecoration: "none" }}
              >
                info@yashvitech.com
              </a>
            </p>

            <form>
              <div className="form-row">
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email Address" />
              </div>
              <div className="form-row">
                <input type="text" placeholder="Interested In" />
                <input type="text" placeholder="Phone Number" />
              </div>
              <textarea placeholder="Message" />
              <button type="submit">Submit</button>
            </form>
          </div>
          <div className="contact-info">
            <div>
              <h4>Call Us</h4>
              <p>Get in touch via phone during working hours.</p>
              <span className="orange-text">📞 +91- 8640091593</span>
            </div>
            <div>
              <h4>Visit Us</h4>
              <p>Stop by our office for a face-to-face consultation.</p>
              <span className="orange-text">📍 2nd Floor, Sahu Complex, near Disha College, Ramnagar, Kota, Raipur, Chhattisgarh 492001</span>
            </div>
            <div>
              {/* <h4>Live Chat</h4>
            <p>Chat with our experts online in real-time.</p>
            <span className="orange-text">💬 Start Chat</span> */}
            </div>
          </div>
        </div>
      </AnimatedWrapper>
      <AnimatedWrapper variant="fadeInUp" delay={0.2}>


        <div className="map-section">
          <iframe
            title="Yashitech IT Solutions Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.501701574518!2d81.60810437515848!3d21.25159948008779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28dd860cf3c217%3A0x493efc4d076691fb!2sYashviTech%20IT%20Solution!5e0!3m2!1sen!2sin!4v1748591333200!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </AnimatedWrapper>

      <AnimatedWrapper variant="fadeInUp" delay={0.2}>

        <div className="faq-section">

          <div className="faq-left">
            <h2>FAQ</h2>
            <h1>Frequently asked questions.</h1>
          </div>
          <div className="faq-right">
            <FAQItem
              question="What services does Yashitech IT Solutions offer?"
              answer="We offer IT consultancy, custom desktop builds, CCTV solutions, web development, and more."
            />
            <FAQItem
              question="How can I book a consultation?"
              answer="You can fill out the form above or contact us directly via phone or live chat."
            />
            <FAQItem
              question="Do you provide custom desktop builds?"
              answer="Yes, we specialize in powerful, tailored desktop builds for gaming, business, and design."
            />
            <FAQItem
              question="Where is your office located?"
              answer="We are located in Raipur, Chhattisgarh. Refer to the map above for exact location."
            />
          </div>
        </div>
      </AnimatedWrapper>
    </div>
  );
};

export default GetInTouch;
