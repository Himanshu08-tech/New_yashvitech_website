import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Career from './Components/Career/Career';
import Service from './Components/Service/Service';
import Contact from './Components/Contact/Contact';
import Portfolio from './Components/Portfolio/portfolio';
import About from "./Components/about/mainabout"
// import Main from './Components/home/main';
// import Header from './Components/home/header';
// import Footer from './Components/home/footer';

function App() {
  return (
    <Router>
      {/* <Header /> */}
      <Routes>
        {/* <Route path="/" element={<Main />} /> */}
        <Route path="/" element={<Career />} />
        <Route path="/services" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio/>} />
         <Route path="/about" element={<About/>} />
        
        
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
