import React from "react";
import "./Product.css";
import image1 from "./images/img1.png"
import image2 from "./images/img2.png"
import image3 from "./images/img3.png"
import image4 from "./images/img4.png"
import image5 from "./images/img5.png"
import image6 from "./images/img6.png"
import image7 from "./images/img7.png"
import image8 from "./images/img8.png"
import image9 from "./images/img9.png"
import image10 from "./images/img10.png"
import image11 from "./images/img11.png"
import AnimatedWrapper from '../../../framer-motion-animation/AnimatedWrapper'

function Product() {

   const AllImage = [
      {
         id: 1,
         image: image1,
      },
      {
         id: 2,
         image: image2,
      },
      {
         id: 3,
         image: image3,
      },
      {
         id: 4,
         image: image4,
      },
      {
         id: 5,
         image: image5,
      },
      {
         id: 6,
         image: image6,
      },
      {
         id: 7,
         image: image7,
      },
      {
         id: 8,
         image: image8,
      },
      {
         id: 9,
         image: image9,
      },
      {
         id: 10,
         image: image10,
      },
      {
         id: 11,
         image: image11,
      },
   ];

   return (
      <AnimatedWrapper variant="fadeInUp" delay={0.2}>
        <div className="marquee-wrapper">
   <h2 className="heading">Clients That Drive Us Forward</h2>
   <div className="marquee-content">
      <div className="marquee-spacer" /> {/* Left spacer */}
      {AllImage.concat(AllImage).map((item, index) => (
         <div key={index} className="marquee-item">
            <img src={item.image} alt={`img-${item.id}`} />
         </div>
      ))}
      <div className="marquee-spacer" /> {/* Right spacer */}
   </div>
</div>

      </AnimatedWrapper>
   );
}

export default Product;
