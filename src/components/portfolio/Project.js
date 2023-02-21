import React, { Component } from 'react';

class Project extends Component {
  state = {
    showInfo:false
  }

  handleInfo = () => {
    this.setState({
      showInfo:!this.state.showInfo
    })
  }

  render() {
    let {name, itemsIcons, source, info, picture} = this.props.item;
    return (
      <div className='project' id={`project_${name.replaceAll(' ','_')}`.toLowerCase().replace('_...','')}>
        <div className='icons'>
          {itemsIcons.map(icon =>
            <i className={icon} key={icon}></i>
          )}
        </div>
        <h3>{name}</h3>
        <img src={picture}  onClick={this.handleInfo} alt='' />
        <span className='infos' onClick={this.handleInfo}>
          <i className='fas fa-plus-circle'></i>
        </span>

          {
            this.state.showInfo && (
              <div className='showInfos'>
                <div className='infosContent'>
                  <div className='head'>
                    <h2>{name}</h2>
                    <div className='sourceCode'>
                      <a href={source} rel='noopener noreferrer' className='button' target='_blank'>See more</a>
                    </div>
                  </div>

                  <p className='text'>{info}</p>

                  <div className='button return' onClick={this.handleInfo}>Back to Portfolio</div>
                </div>
              </div>
            )
          }
      </div>
    
    );
  }
}

export default Project;