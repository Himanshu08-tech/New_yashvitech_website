import React from 'react';
import Car from './Components/Car/Car' // ✔️ correct import if Car.js is in the same folder
import Service from './Components/Service/Service'; // ✔️ correct import if Service.js is in the same folder
import Contact from './Components/Contact/Contact'; // ✔️ correct import if Contact.js is in the same folder
function App() {
  return (
    <div>
      <Car />
      <Service />
      {/* <Contact /> Uncomment this line if you want to include the Contact component */}
      <Contact/>
    </div>
  );
}

export default App;
