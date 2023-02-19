import React from 'react';

const Links = () => {
  return (
    <div className='links'>
        <ul>
          <li>
            <a href='https://www.linkedin.com/in/arnaud-ulric-6a811478' target='_blank' rel="noopener noreferrer">
              <i className='fab fa-linkedin'></i>
            </a>
          </li>
          <li>
            <a href='https://github.com/aulric-ledger' target='_blank' rel="noopener noreferrer">
              <i className='fab fa-github-alt'></i>
            </a>
          </li>
          <li>
            <a href='https://twitter.com/Tommy97234' target='_blank' rel="noopener noreferrer">
              <i className='fab fa-twitter'></i>
            </a>
          </li>
        </ul>
      </div>
  );
};

export default Links;