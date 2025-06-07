// src/components/Yashvi.js
import React from "react";
import { useParams } from "react-router-dom";
import "./Yashvi.css";

import Img1 from "../Images/html.png";
import Img2 from "../Images/css.png";
import Img3 from "../Images/JavaScript-Logo.png";
import Img4 from "../Images/react.png";
import Img5 from "../Images/Py.png";
import Img6 from "../Images/django.jpg";
import Img7 from "../Images/php.png";
import Img8 from "../Images/database.png";
import Img9 from "../Images/java.webp";

// Full skill set data
const allSkills = {
  html: { title: "HTML", content: "HTML is the backbone of the World Wide Web, providing the structure and semantics necessary to create web pages", image: Img1 },
  css: { title: "CSS", content: "CSS is an essential technology for web development, allowing developers to control the visual presentation of HTML documents.", image: Img2 },
  javascript: { title: "JavaScript", content: "JavaScript is a foundational technology in web development, empowering developers to build interactive and responsive web applications.", image: Img3 },
  react: { title: "React.js", content: "React.js has become a cornerstone of modern web development due to its component-based architecture, efficient rendering with the Virtual DOM, and strong developer ecosystem.", image: Img4 },
  python: { title: "Python", content: "Python is a versatile and powerful programming language that has made a significant impact across various domains, from web development and data science to artificial intelligence and scientific research.Python is a versatile and powerful programming language", image: Img5 },
  django: { title: "Django", content: "Django is a powerful and versatile web framework that simplifies web application development while promoting best practices in security, scalability, and maintainability.", image: Img6 },
  php: { title: "PHP", content: "PHP, which stands for Hypertext Preprocessor is a widely used server-side scripting language for web development.", image: Img7 },
  database: { title: "Database", content: "A database is a structured collection of data that is organized and stored for easy retrieval, management, and manipulation.", image: Img8 },
  java: { title: "Java", content: "Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.", image: Img9 }
};




// Course-wise skill mapping
const skillMap = {
  fullstack: ["html", "css", "javascript", "react", "python", "django", "php", "database", "sql", "java"],
  frontend: ["html", "css", "javascript", "react"],
  backend: ["python", "django", "php", "database", "sql", "java"],
};


function Yashvi() {
  const { slug } = useParams();
  const skillKeys = skillMap[slug] || [];

  const displaySkills = skillKeys
    .filter(key => allSkills[key])
    .map(key => allSkills[key]);

  return (
    <div className="MainPage">
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        {slug.toUpperCase()} Developer Skills
      </h2>
      <div className="ContainerDiv">
        {displaySkills.length > 0 ? (
          displaySkills.map((skill, idx) => (
            <div className="Card" key={idx} style={{ animationDelay: `${idx * 0.1}s` }}>
              <div className="ImageContainer">
                <img src={skill.image} alt={skill.title} className="CardImage" />
              </div>
              <div className="CardContent">
                <h3 className="CardTitle">{skill.title}</h3>
                <p>{skill.content}</p>
                <button className="CardButton">REQUEST A DEMO</button>
              </div>
            </div>
          ))
        ) : (
          <p>No skills found for this course.</p>
        )}
      </div>
    </div>
  );
}

export default Yashvi;


// import React from 'react';
// import './Yashvi.css';

// import Img1 from '../component/images/html.png';
// import Img2 from '../component/images/css.png';
// import Img3 from '../component/images/JavaScript-Logo.png';
// import Img4 from '../component/images/react.png';
// import Img5 from '../component/images/Py.png';
// import Img6 from '../component/images/django.jpg';
// import Img7 from '../component/images/php.png';
// import Img8 from '../component/images/database.png';
// import Img9 from '../component/images/java.webp';

// function Yashvi() {
//   const Data = [
//     { Image: Img1, content: 'HTML is the backbone of the World Wide Web...' },
//     { Image: Img2, content: 'CSS is an essential technology for web development...' },
//     { Image: Img3, content: 'JavaScript is a foundational technology...' },
//     { Image: Img4, content: 'React.js has become a cornerstone of modern web development...' },
//     { Image: Img5, content: 'Python is a versatile and powerful programming language...' },
//     { Image: Img6, content: 'Django is a powerful and versatile web framework...' },
//     { Image: Img7, content: 'PHP is a widely used server-side scripting language...' },
//     { Image: Img8, content: 'A database is a structured collection of data...' },
//     { Image: Img9, content: 'Java is a high-level, class-based, object-oriented programming language...' }
//   ];

//   return (
//     <div className='MainPage'>
//       <div className='ContainerDiv'>
//         {Data.map((item, index) => (
//           <div
//             key={index}
//             className="Card"
//             style={{ animationDelay: `${index * 0.1}s` }}
//           >
//             <img src={item.Image} alt={`img-${index}`} className="CardImage" />
//             <div className="CardContent">
//               <h4>{item.content}</h4>
//               <button className="CardButton">Read More</button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Yashvi;
