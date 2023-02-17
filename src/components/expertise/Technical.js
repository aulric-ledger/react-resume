import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

class Technical extends Component {
  state = {
    skills: [
      {id: 1, value: 'Web3', xp:4.5},
      {id: 2, value: 'Blockchain', xp:4.5},
      {id: 3, value: 'Javascript', xp:4},
      {id: 4, value: 'React', xp:2.5},
      {id: 5, value: 'Test strategy', xp:4.5},
      {id: 6, value: 'Desktop automation', xp:4},
      {id: 7, value: 'Mobile automation', xp:1.5},
      {id: 8, value: 'Backend testing', xp:1}
    ],
    tools: [
      {id: 1, value: 'Playwright', xp:4},
      {id: 2, value: 'WebBrowserIO', xp:3},
      {id: 3, value: 'Detox', xp:2},
      {id: 4, value: 'Appium', xp:1},
      {id: 8, value: 'Hardhat', xp:2.5},
      {id: 6, value: 'Xray', xp:4},
      {id: 7, value: 'Insomnia', xp:1}
    ]
  }
  render() {
    let {skills, tools} = this.state;
    return (
      <div className='technicals'>
        <ProgressBar
          technical={skills}
          classname='skillsDisplay'
          title='skills'
        />
        <ProgressBar
          technical={tools}
          classname='toolsDisplay'
          title='tools'
        />  
      </div>
    );
  }
}

export default Technical;