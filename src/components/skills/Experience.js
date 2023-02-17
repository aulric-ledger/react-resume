import React from 'react';

const Experience = () => {
  return (
    <div className='experience'>
      <h3>Experience</h3>
      <div className='exp1'>
        <h4>QA Lead - Ledger (NFT - Metaverse)</h4>
        <h5>2022 - Current</h5>
        <p>
        [L]Market is a nft marketplace interacting with Ledger Live
        and in the middle of the whole B2C activities.
        Project is composed of several features and areas.
         <ul>
          <li>Setup the QA strategy for UI, Backend, Smart Contract testing</li>
          <li>Onboard Devs and Products</li>
          <li>Implement UI regression testing</li>
          <li>Point of contact for interraction between the BU and the rest of Ledger</li>
        </ul>
        </p>
      </div>
      <div className='exp2'>
        <h4>QA Engineer - Ledger Live</h4>
        <h5>2018 - Current</h5>
        <p>
        Ledger Live is a crypto portfolio for Ledger wallet devices so user can Manage his funds (Transfer, Swap, Buy)   
        As the first QA of the company I have been implicated in the Ledger Live app development from the first line of code
        I participated in building the QA team, onboard new comers, Junior mentoring, team Lead...
        Entry point of the B2C team regarding QA
         <ul>
          <li>Setup the QA strategy for UI, internal logic...</li>
          <li>Implement common logic automation</li>
          <li>Implement UI regression automation</li>
        </ul>
        </p>
      </div>
    </div>
  );
};

export default Experience;