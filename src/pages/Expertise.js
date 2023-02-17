import React from 'react';
import Navigation from '../components/Navigation';
import Experience from '../components/expertise/Experience';
import Hobbies from '../components/expertise/Hobbies';
import Other from '../components/expertise/Other';
import Technical from '../components/expertise/Technical';

const Expertise = () => {
  return (
    <div className='expertise'>
      <Navigation />
      <div className='expertiseContent'>
        <Technical />
        <Experience />
        <Other />
        <Hobbies />
      </div>
    </div>
  );
};

export default Expertise;