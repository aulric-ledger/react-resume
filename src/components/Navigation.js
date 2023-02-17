import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {

  return (
    <div className='sidebar'>
      <div className='id'>
        <div className='idContent'>
          <img src='./media/avatar2.jpg' alt='profil-pic' />
          <h3>QA Lead - Web3</h3>
        </div>
      </div>
      <div className='navigation'>
        <ul>
          <li>
            <NavLink exact to='/' activeClassName='navActive'>
              <i className='fas fa-home'>
                <span>Home</span>
              </i>
            </NavLink>
          </li>
          <li>
            <NavLink exact to='/expertise' activeClassName='navActive'>
              <i className='fas fa-user-secret'>
                <span>About me</span>
              </i>
            </NavLink>
          </li>
          <li>
            <NavLink exact to='/portfolio' activeClassName='navActive'>
              <i className='fas fa-tasks'>
                <span>Portfolio</span>
              </i>
            </NavLink>
          </li>
          <li>
            <NavLink exact to='/contact' activeClassName='navActive'>
              <i className='fas fa-address-card'>
                <span>Contact</span>
              </i>
            </NavLink>
          </li>
        </ul>
      </div>
      
      <div className='socialNetwork'>
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
            <a href='https://mail.google.com/' target='_blank' rel="noopener noreferrer">
              <i className='fas fa-paper-plane'></i>
            </a>
          </li>
        </ul>
        <div className='signature'>
          <h4>Arnaud97234 - 2023</h4>
        </div>
      </div>
    </div>
  );
};

export default Navigation;