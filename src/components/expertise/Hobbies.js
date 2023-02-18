import React from 'react';
import { faPlaneCircleCheck, faCode, faGlobeEurope, faMicrochip, faGamepad, faRocket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Hobbies = () => {
  return (
    <div className='hobbies'>
      <h3>Hobbies</h3>
      <ul>
        <li className='hobby'><FontAwesomeIcon icon={faCode} /> NFT / Defi / Cryptocurrency</li>
        <li className='hobby'><FontAwesomeIcon icon={faPlaneCircleCheck} /> Private Pilote License</li>
        <li className='hobby'><FontAwesomeIcon icon={faGlobeEurope} /> Travel</li>
        <li className='hobby'><FontAwesomeIcon icon={faMicrochip} /> New technologies</li>
        <li className='hobby'><FontAwesomeIcon icon={faGamepad} /> Retro Gaming</li>
        <li className='hobby'><FontAwesomeIcon icon={faRocket} /> Science</li>
      </ul>
    </div>
  );
};

export default Hobbies;
