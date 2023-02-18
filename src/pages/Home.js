import React from 'react';
import Navigation from '../components/Navigation';

const Home = () => {
  return (
    <div className='home'>
      <Navigation />
      <div className='homeContent'>
        <div className='content'>
          <h1>Arnaud ULRIC</h1>
          <h2>QA Lead (ISTQB Test Analyst)</h2>
          <div className='pdf'>
            <a href='./media/resume.pdf' target='_blank'>
              <i className='fas fa-download'></i>
              <span> Download resume</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;