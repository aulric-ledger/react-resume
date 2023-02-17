import React from 'react';
import Navigation from '../components/Navigation';
import Experience from '../components/skills/Experience';
import Hobbies from '../components/skills/Hobbies';
import Other from '../components/skills/Other';
import Technical from '../components/skills/Technical';

const Skills = () => {
  return (
    <div className='skills'>
      <Navigation />
      <div className='skillsContent'>
        <Technical />
        <Experience />
        <Other />
        <Hobbies />
      </div>
    </div>
  );
};

export default Skills;