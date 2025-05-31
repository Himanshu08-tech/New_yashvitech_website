import React from 'react';
import Car from './Components/Car/Car' // ✔️ correct import if Car.js is in the same folder
import Service from './Components/Service/Service'; // ✔️ correct import if Service.js is in the same folder
import Contact from './Components/Contact/Contact'; 
import PortfolioTitlePage from './Components/Portfolio/Portfolio_main';
import PortfoliomidPage from './Components/Portfolio/Portfolio_mid';
import PortfoliobottomPage from './Components/Portfolio/Portfolio_bottom';

function App() {
  return (
    <div>
      <Car />
      <Service />
      {/* <Contact /> Uncomment this line if you want to include the Contact component */}
      <Contact/>
      <PortfolioTitlePage />
      <PortfoliomidPage />
      <PortfoliobottomPage />
    </div>
  );
}

export default App;
