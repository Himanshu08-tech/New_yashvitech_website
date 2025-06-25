// import React from "react";
// import { AnimatePresence } from 'framer-motion';
// import { useLocation } from 'react-router-dom';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Career from "./Components/Career/Career";
// import Service from "./Components/Service/Service";
// import Contact from "./Components/Contact/Contact";
// import Portfolio from "./Components/Portfolio/portfolio";
// import About from "./Components/about/mainabout";
// import Main from "./Components/home/main";
// import Header from "./Components/home/header";
// import Footer from "./Components/home/footer";
// import CustomCursor from "./CustomePoniter/CustomCursor";
// import ScrollToTop from "./Components/ScrollToTop";
// import ReadMore from "./Components/home/Services/ReadMore/ReadMore";

// function App() {
//   const location = useLocation();
//   return (
//     <>
//     <BrowserRouter>
//       <ScrollToTop />
//       <CustomCursor />
//       <Header />
//       <div style={{ marginTop: "70px" }}>
//         <AnimatePresence mode="wait">
//           <Routes location={location} key={location.pathname}>
//             <Route path="/" element={<Main />} />
//             <Route path="/services" element={<Service />} />
//             <Route path="/career" element={<Career />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="/portfolio" element={<Portfolio />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/readmore" element={<ReadMore />} />
//           </Routes>
//         </AnimatePresence>
//       </div>
//       <Footer />
//     </BrowserRouter>
//     </>
//   );
// }

// export default App;

import React from "react";
import { AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { Routes, Route } from "react-router-dom";
import Career from "./Components/Career/Career";
import Service from "./Components/Service/Service";
import Contact from "./Components/Contact/Contact";
import Portfolio from "./Components/Portfolio/portfolio";
import About from "./Components/about/mainabout";
import Main from "./Components/home/main";
import Header from "./Components/home/header";
import Footer from "./Components/home/footer";
import CustomCursor from "./CustomePoniter/CustomCursor";
import ScrollToTop from "./Components/ScrollToTop";
import ReadMore from "./Components/home/Services/ReadMore/ReadMore";

function App() {
  const location = useLocation();
  return (
    <>
      {/* <ScrollToTop /> */}
      {/* <CustomCursor /> */}
      <Header />
      <div style={{ marginTop: "70px" }}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Main />} />
            <Route path="/services" element={<Service />} />
            <Route path="/career" element={<Career />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
            <Route path="/readmore" element={<ReadMore />} />
          </Routes>
        </AnimatePresence>
      </div>
      <Footer />
    </>
  );
}

export default App;

