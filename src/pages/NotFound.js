import React from 'react';
import { NavLink } from 'react-router-dom';
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const NotFound = () => {
  return (
    <div className='notFound'>
      <div className='notFoundContent'>
        <h3>Oops, page doesn't exist...</h3>
        <div className='homeButton'>
          <NavLink exact to='/'>
            <FontAwesomeIcon icon={faHome} />
            <span> Home</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NotFound;