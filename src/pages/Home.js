import React from 'react';
import Navigation from '../components/Navigation';

const Home = () => {
  return (
    <div className='home'>
      <Navigation />
      <div className='homeContent'>
        <div className='content'>
          <h1>Arnaud ULRIC</h1>
          <h2>QA Lead</h2>
          <div className='pdf'>
            <a href='./media/resume.pdf' target='_blank'>
              <i class='fas fa-download'></i>
              <span> Download resume</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;