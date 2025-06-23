// import React from 'react'
// import image1 from './image/image1.png'
// import image2 from './image/image2.png'
// import image3 from './image/image3.png'
// import image4 from './image/image4.png'
// import image5 from './image/image5.png'
// import image6 from './image/image6.png'
// import image7 from './image/image7.png'
// import image8 from './image/image8.png'
// import image9 from './image/image9.png'
// import image10 from './image/image10.png'
// import './PortfolioTop.css'

// function PortfolioTop() {
//    const CardData = [
//       { id: 1, image: image1, link: 'https://myvehicles.in/' },
//       { id: 2, image: image2, link: 'https://apsmarthomes.in/' },
//       { id: 3, image: image3, link: 'https://rupeshgrahaksevakendra.com/' },
//       { id: 4, image: image4, link: 'https://shreekrishnapowertools.com/' },
//       { id: 5, image: image5, link: 'https://yashvitech.com/Portfolio' },
//       { id: 6, image: image6, link: 'https://dhyeyacademy.co.in/' },
//       { id: 7, image: image7, link: 'https://priyanshi.coalfeed.in/' },
//       { id: 8, image: image8, link: 'https://priyanshi.coalfeed.in/' },
//       { id: 9, image: image9, link: 'https://billzap.in/' },
//       { id: 10, image: image10, link: 'https://yashvitech.com/Portfolio' }
//    ]

//    return (
//       <>
//          <div className='portfolioTopContainer'>
//             {CardData.map((item) => (
//                <div key={item.id} className='portfolioCard'>
//                   <img src={item.image} alt={`Portfolio ${item.id}`} />
//                   <a href={item.link} target='_blank'> <button className='portfolio-btn'>{item.link}</button></a>
//                </div>
//             ))}
//          </div>

//       </>
//    )
// }

// export default PortfolioTop


import React from 'react';
import { motion } from 'framer-motion';
import image1 from './image/image1.png';
import image2 from './image/image2.png';
import image3 from './image/image3.png';
import image4 from './image/image4.png';
import image5 from './image/image5.png';
import image6 from './image/image6.png';
import image7 from './image/image7.png';
import image8 from './image/image8.png';
import image9 from './image/image9.png';
import image10 from './image/image10.png';
import './PortfolioTop.css';

function PortfolioTop() {
  const CardData = [
    { id: 1, image: image1, link: 'https://myvehicles.in/' },
    { id: 2, image: image2, link: 'https://apsmarthomes.in/' },
    { id: 3, image: image3, link: 'https://rupeshgrahaksevakendra.com/' },
    { id: 4, image: image4, link: 'https://shreekrishnapowertools.com/' },
    { id: 5, image: image5, link: 'https://yashvitech.com/Portfolio' },
    { id: 6, image: image6, link: 'https://dhyeyacademy.co.in/' },
    { id: 7, image: image7, link: 'https://priyanshi.coalfeed.in/' },
    { id: 8, image: image8, link: 'https://priyanshi.coalfeed.in/' },
    { id: 9, image: image9, link: 'https://billzap.in/' },
    { id: 10, image: image10, link: 'https://yashvitech.com/Portfolio' }
  ];

  return (
    <div className='portfolioTopContainer'>
      {CardData.map((item) => (
        <motion.div
          key={item.id}
          className='portfolioCard'
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: item.id * 0.1 }}
          whileHover={{ scale: 1.05 }}
        >
          <img src={item.image} alt={`Portfolio ${item.id}`} />
          <a href={item.link} target='_blank' rel='noopener noreferrer'>
            <motion.button
              className='portfolio-btn'
              whileHover={{
                scale: 1.1,
                backgroundColor: '#004cff',
                transition: { duration: 0.3 }
              }}
            >
              {item.link}
            </motion.button>
          </a>
        </motion.div>
      ))}
    </div>
  );
}

export default PortfolioTop;
