import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const IntroHeader = () =>{
  return (
    <div className="IntroHeader">
      <p>Changelly</p>
      <p>Sign in <FontAwesomeIcon icon="arrow-right" className="faIcon" /></p>
    </div>
  );

};

export default IntroHeader;