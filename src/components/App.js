import React from 'react';
import './App.scss';
import 'semantic-ui-css/semantic.min.css';

// import Webcam from './Webcam';
import Navbar from './Navbar/index';
// import SideNavbar from './SideNavbar';
import BioCard from './Cards/BioCard';
import LastVisitCard from './Cards/LastVisitCard';
import NewsCard from './Cards/NewsCard';
import SocialCard from './Cards/SocialCard';
import ProfessionalCard from './Cards/ProfessionalCard';

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
        {/* <SideNavbar /> */}
        <div className="content">
          <div className='row'>
            <BioCard />
            <LastVisitCard />
          </div>
          <div className='row'>
            <NewsCard />
            <SocialCard />
            <ProfessionalCard />
          </div>
          {/* <Webcam /> */}
        </div>
      </section>
      
    </div>
  );
}

export default App;