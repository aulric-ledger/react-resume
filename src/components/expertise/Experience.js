import React from 'react';

const Experience = () => {
  return (
    <div className='experience'>
      <h3>Experience</h3>
      <div className='experiencesList'>
        <div className='exp1'>
          <h4>QA Lead - Ledger (NFT - Metaverse)</h4>
          <h5>2022 - Current</h5>

          [L]Market is a nft marketplace interacting with Ledger Live
          and in the middle of the whole B2C activities.
          Project is composed of several features and areas.
          <ul>
            <li>Setup the QA strategy for UI, Backend, Smart Contract testing</li>
            <li>Onboard Devs and Products</li>
            <li>Implement UI regression testing</li>
            <li>Point of contact for interraction between the BU and the rest of Ledger</li>
          </ul>
        </div>
        <div className='exp2'>
          <h4>QA Engineer - Ledger Live</h4>
          <h5>2018 - Current</h5>
          
          Ledger Live is a crypto portfolio for Ledger wallet devices so user can Manage his funds (Transfer, Swap, Buy)   
          As the first QA of the company I have been implicated in the Ledger Live app development from the first line of code
          I participated in building the QA team, onboard new comers, Junior mentoring, team Lead...
          Entry point of the B2C team regarding QA
          <ul>
            <li>Setup the QA strategy for UI, internal logic...</li>
            <li>Implement common logic automation</li>
            <li>Implement UI regression automation</li>
          </ul>
        </div>
        <div className='exp3'>
          <h4>QA Engineer - TVTY</h4>
          <h5>2016 - 2018</h5>
          <p>
          Working with several data sources provider (AdWord, DBM, Social Networks, Tv programs, weather forecast).
          Involvement in establishment of CI and QA processes: Docker, Makefile, Codeception, Git and Jenkins.
          Review requirements, specifications and technical design documents to provide timely and meaningful feedback.
          Write test plans derived from specification (functional and technical).
          Estimate, prioritize, plan, and coordinate testing activities.
          Manage tasks and testing scope for multiple testing projects.
          Make recommendations to improve product reliability, performance, and quality assurance best practices and processes.
          Research evolving test trends.
          Design, develop and execute automation scripts (Codeception). Design test data, test files to feed automated tests.
          Identify, record, document thoroughly and track defects. Perform continue regression testing. Manage TMA.
          </p>
        </div>
        <div className='exp4'>
          <h4>Software Tester - Delamaison.fr</h4>
          <h5>2012 - 2016</h5>
        </div>
      </div>
    </div>
  );
};

export default Experience;