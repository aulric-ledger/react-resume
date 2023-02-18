import React from "react";
import Navigation from "../components/Navigation";

 const Contact = () => {
  const email = 'arnaud.ulric@gmail.com';
  const phone = '+33 6 27 91 91 00';
  const copyContact = (input) => {
    navigator.clipboard.writeText(input);
    alert(input + ' copied to clippboard');
  }
  return (
    <div className='contact'>
      <Navigation />
      <div className='contactContent'>
        <div className='emailContent'>
          <h3>e-mail</h3>
          <a href={`mailto:${email}`}><i className='fas fa-paper-plane'></i>{email}</a>
          <button id='copy-email' onClick={()=>copyContact(email)}><i className='fas fa-copy' title='copy e-mail'></i></button>
        </div>
        <div className='phoneContent'>
          <h3>Phone</h3>
          <button id='phoneTo' onClick={()=>window.open(`tel:${phone}`)}><i className='fas fa-phone'></i>{phone}</button>
          <button id='copy-phone' onClick={()=>copyContact(phone)}><i className='fas fa-copy' title='copy phone number'></i></button>
        </div>
      </div>
    </div>
  );
};

export default Contact; 