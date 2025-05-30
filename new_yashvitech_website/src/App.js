import React from 'react';
import Career from './Components/Career/Career';
import Service from './Components/Service/Service'; // ✔️ correct import if Service.js is in the same folder
import Contact from './Components/Contact/Contact'; // ✔️ correct import if Contact.js is in the same folder
function App() {
  return (
    <div>
      <Career />
      <Service />
      {/* <Contact /> Uncomment this line if you want to include the Contact component */}
      <Contact/>
    </div>
  );
}

export default App;
