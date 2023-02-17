import React from 'react';

const Other = () => {
  return (
    <div className='other'>
      <h3>Other Skills</h3>
      <div className='lists'>
        <div className='list1'>
          <ul>
            <li><i className='fas fa-language'></i> English: fluent</li>
            <li><i className='fas fa-language'></i> French: native</li>
            <li><i className='fas fa-terminal'></i> Terminal</li>
            <li><i className='fab fa-github'></i> Github</li>
          </ul>
        </div>
        <div className='list2'>
          <ul>
            <li><i className='fas fa-check'></i> Agile methodologies</li>
            <li><i className='fab fa-linux'></i> UNIX env</li>
            <li><i className='fas fa-atom'></i> Electron</li>
            <li><i className='fab fa-docker'></i> Docker</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Other;