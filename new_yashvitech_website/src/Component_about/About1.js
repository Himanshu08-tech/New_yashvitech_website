import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "../Styles/about1.css";
import Cloud from '../Images/image7.jpg'
import Image2 from '../Images/image1.jpg'
import Image3 from '../Images/image8.jpg'
const services = [
  {
    title: "Custom Software Development",
    subtitle: "Tailored web and mobile solutions that drive business growth.",
    bgColor: "#d3e5ff",
    image: Cloud
  },
  {
    title: "Cloud Integration",
    subtitle: "Secure, scalable cloud solutions to empower digital transformation.",
    bgColor: "#d6f5e3",
    image: Image2
  },
  {
    title: "UI/UX Design",
    subtitle: "Creating intuitive, human-centered designs for digital products.",
    bgColor: "#ffe6e6",
    image: Image3
  },
];

const AboutYashviteck = () => {
  return (
    <div className="about-container1">
      {/* Left Section */}
      <div className="left-section">
        <h1>
          Innovating the Future<br />Empowering Your Vision.
        </h1>
        <p>
          At Yashviteck IT Solution, we turn complex tech challenges into smart,
          scalable solutions. From software development to cloud integration and UI/UX excellence — we’re your trusted tech partner.
        </p>

        <div className="btn-box">
          <a
            href="https://www.youtube.com/@YashvitechITSolutionOfficial" // 🔁 Replace with your actual YouTube link
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="subscribe-btn">Our YouTube Channel</button>
          </a>
        </div>

      </div>

      {/* Right Section (Swiper Carousel) */}
      <div className="right-section-carousel">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          className="carousel-track"
        >
          {services.map((service, index) => (
            <Swiper
              modules={[Autoplay]}
              spaceBetween={20}
              slidesPerView={3}
              centeredSlides={true}
              loop={true}
              slideToClickedSlide={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              className="carousel-track"
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
            >
              {services.map((service, index) => (
                <SwiperSlide key={index}>
                  <div className="carousel-card">
                    <div className="card-header">
                    </div>
                    <h2>{service.title}</h2>
                    <p className="subtitle">{service.subtitle}</p>

                    {/* 👇 Add the image here */}
                    <img src={services.image} className="card-image" />
                  </div>
                </SwiperSlide>

              ))}
            </Swiper>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default AboutYashviteck;
