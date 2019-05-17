import "./Intro.scss";
import React from 'react';
import IntroHeader from './IntroHeader/IntroHeader';
import IntroLeft from './IntroLeft/IntroLeft';
import IntroRight from './IntroRight/IntroRight';

class Intro extends React.Component {
  render() {
    return (
      <div className="Intro">
        <IntroHeader />
        <div className="IntroContent">
          <IntroLeft/>
          <IntroRight/>
        </div>
        <div className="IntroFooterBuffer"></div>
      </div>
    );
  }
}

export default Intro;