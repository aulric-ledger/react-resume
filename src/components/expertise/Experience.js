import React, { Component } from 'react';
import { experienceData } from '../../data/experienceData';

class Experience extends Component {
  state = {
    experience:experienceData
  }
  render() {
    let {experience} = this.state;

    return (
      <div className='experiences'>
        <h3>Experience</h3>
        <div className='experiencesList'>
        {
          experience.map(item => {
            return (
              <div className='experience' id={item.id}>
                <h4>{item.title}</h4>
                <h5>{item.duration}</h5>
                <text>
                  {item.description}
                </text>
              </div>
            )
          })
        }
             </div>
      </div>
    );
  }
}

export default Experience;