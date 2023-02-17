import React from 'react';

const ProgressBar = (props) => {
  console.log(props)
  return (
    <div className={props.classname}>
      <h3>{props.title}</h3>
      <div>
        {
          props.technical.map((item) => {
            let xpLevel = 5;
            let progressBar = item.xp / xpLevel * 100 + '%';

            return (
              <div id={item.id} className='technologiesList'>
                  <li>{item.value}</li>
                  <div className='progressBar' style={{width:progressBar}}></div>
              </div>
            )
          })
        }
      </div>
    </div>
  );
};

export default ProgressBar;