import React from 'react';
// import { Icon } from 'semantic-ui-react';
import SignupModal from './SignupModal/SignupModal';

const IntroHeader = () =>{
  return (
    <div className="IntroHeader">
      <p>Changelly</p>
      <SignupModal />
    </div>
  );

};

export default IntroHeader;