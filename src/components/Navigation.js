import React from 'react';
import { NavLink } from 'react-router-dom';
import { faHome, faUserSecret, faBarsProgress, faAddressCard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
              <FontAwesomeIcon icon={faHome} />
                <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to='/expertise' activeClassName='navActive'>
              <FontAwesomeIcon icon={faUserSecret} />
                <span>About me</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to='/portfolio' activeClassName='navActive'>
              <FontAwesomeIcon icon={faBarsProgress} />
                <span>Portfolio</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to='/contact' activeClassName='navActive'>
              <FontAwesomeIcon icon={faAddressCard} />
                <span>Contact</span>
            </NavLink>
          </li>
        </ul>
      </div>
      
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
        <div className='signature'>
          <h4>Arnaud97234 - 2023</h4>
        </div>
      </div>
    </div>
  );
};

export default Navigation;