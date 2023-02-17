import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

class Technical extends Component {
  state = {
    technologies: [
      {id: 1, value: 'Javascript', xp:4},
      {id: 2, value: 'React', xp:2},
      {id: 3, value: 'Desktop testing', xp:4},
      {id: 4, value: 'web3', xp:4},
      {id: 5, value: 'Mobile testing', xp:1},
      {id: 6, value: 'Backend testing', xp:1},
      {id: 7, value: 'Electron', xp:3}
    ],
    tools: [
      {id: 1, value: 'Playwright', xp:4},
      {id: 2, value: 'WebBrowserIO', xp:3},
      {id: 3, value: 'Detox', xp:2},
      {id: 4, value: 'Appium', xp:1},
      {id: 5, value: 'Insomnia', xp:1},
      {id: 6, value: 'Xray', xp:4}
    ]
  }
  render() {
    let {technologies, tools} = this.state;
    return (
      <div className='technoTools'>
        <ProgressBar
          technical={technologies}
          classname='technologiesDisplay'
          title='technologies'
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