import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

class Technical extends Component {
  state = {
    skills: [
      {id: 1, value: 'Web3', xp:4.25},
      {id: 2, value: 'Blockchain', xp:4.25},
      {id: 3, value: 'Solidity', xp:2},
      {id: 4, value: 'Javascript', xp:4},
      {id: 5, value: 'React', xp:2.5},
      {id: 6, value: 'Test strategy', xp:4.5},
      {id: 7, value: 'Desktop automation', xp:4},
      {id: 8, value: 'Mobile automation', xp:2},
      {id: 9, value: 'Open source', xp:3.5},
      {id: 10, value: 'API testing', xp:1}
    ],
    tools: [
      {id: 1, value: 'Playwright', xp:4},
      {id: 2, value: 'WebBrowserIO', xp:3},
      {id: 3, value: 'Detox', xp:2.5},
      {id: 4, value: 'Appium', xp:1.25},
      {id: 8, value: 'Hardhat', xp:2},
      {id: 6, value: 'Xray / Jira', xp:4.25},
      {id: 7, value: 'Insomnia', xp:1}
    ]
  }
  render() {
    let {skills, tools} = this.state;
    return (
      <div className='technicals'>
        <ProgressBar
          key={skills.value}
          technical={skills}
          classname='skillsDisplay'
          title='skills'
        />
        <ProgressBar
          key={tools.value}
          technical={tools}
          classname='toolsDisplay'
          title='tools'
        />  
      </div>
    );
  }
}

export default Technical;