import './Footer.scss';
import React from 'react';

export const Footer = () => {
  return(
      <div className="Footer">
        <p className = "rights">© 2018 - All rights reserved</p>
        <span className="bigBuffer"></span>
        <p>Terms of use</p>
        <span className="smallBuffer"></span>
        <p>Privacy Policy</p>
      </div>
  );
};