import React from 'react';
import './App.css';

import Webcam from './Webcam';
import Navbar from './Navbar/index';
import SideNavbar from './SideNavbar';
import Card from './Card';

function App() {
  const style = {
    display: 'flex',
    flexDirection: 'row',
    height: '100%'
  };

  return (
    <div className="App">
      <Navbar />
      <section style={style}>
        <SideNavbar />
        <div>
          <Card />
          {/* <Webcam /> */}
        </div>
      </section>
      
    </div>
  );
}

export default App;