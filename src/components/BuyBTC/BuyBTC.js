import "./BuyBTC.scss";
import React from 'react';
import { Button } from 'semantic-ui-react';

class BuyBTC extends React.Component {
  render () {
    
    return (
      <div className='BuyBTC'>
        <div className='btcText'>
          <p>Buy Bitcoin with credit card</p>
          <p>In just a few easy steps</p>
        </div>
        <div className='buttons'>
          <Button color='green'>CREATE LOGO ACCOUNT</Button>
          <span className='buffer'></span>
          <Button basic>Buy Now</Button>
        </div>
      </div>
    );
  };
}

export default BuyBTC;
