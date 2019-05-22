import React from 'react';
import { Segment, Flag, Button } from 'semantic-ui-react'
import BtcSlider from './BtcSlider/BtcSlider';
import CurrencyInput from './CurrencyInput/CurrencyInput';
import dots from '../../../assets/dots.png';
import btc from '../../../assets/btc.png';
import axios from 'axios';

class IntroRight extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currencyFrom : 'USD',
      currencyTo : 'BTC',
      amountFrom : 2000,
      amountTo : '',
      rates : undefined,
    }
    
    this.setAmount = this.setAmount.bind(this);
  }
  
  componentDidMount() {
    this.getRates("BTC" ,["USD","CAD","KRW"]);
  }
  
  getRates(currency, ratesFor) {
    const body = {
      currency : currency,
      ratesFor : ratesFor
    }

    axios.post('http://localhost:5000/coinbase/currency', body)
    .then((res)=>{
      const rates = res.data;
      const newAmountTo = 
      (this.state.amountFrom / rates[this.state.currencyFrom]).toFixed(7);
      this.setState({
        rates : rates,
        amountTo : newAmountTo
      });
    })
    .catch((err)=>{
      console.log(err);
    });
  }
  
  setAmount( value, origin ){
    // 1st currency input change
    if(origin === 'from'){
      this.setAmountFrom(value);
      const newAmountTo = value / this.state.rates[this.state.currencyFrom];
      this.setAmountTo(newAmountTo);
    }
    // 2nd currence input OR Slider change
    else {
      this.setAmountTo(value);
      const newAmountFrom = value * this.state.rates[this.state.currencyFrom];
      this.setAmountFrom(newAmountFrom);
    }
  }
  
  setAmountFrom( value ) {
    //input decimal check - only allow up to 2nd decimal
    value = value.toString();
    if(value.indexOf(".") !== -1){
      value = value.slice(0, value.indexOf(".")+3);
    }
    
    this.setState({
      amountFrom : value
    });
  }
  
  setAmountTo( value ){
    //input decimal check - only allow up to 8nd decimal
    value = value.toString();
    if(value.indexOf(".") !== -1){
      value = value.slice(0, value.indexOf(".")+9);
    }
    
    this.setState({
      amountTo : value
    });
  }
  
  
  render() {
    const getCountry = (flagName, currencyCode) =>{
      return (
        <div><Flag name={flagName} /> {currencyCode}</div>
      );
    };
    
    const currencyOptions = [
      {
        key  : 'USD',
        text : getCountry('us','USD'),
        value: 'USD',
      },
      {
        key  : 'CAD',
        text : getCountry('ca','CAD'),
        value: 'CAD',
        
      },
      {
        key  : 'KRW',
        text : getCountry('kr','KRW'),
        value: 'KRW',
      }
    ];
    
    const btcText = (<div><img src={btc} alt='btc'/> BTC</div>);
        
    const btcOptions = [
      {
      key   : 'BTC',
      text  : btcText,
      value : 'BTC',
      }
    ];
    
    return (
      <Segment className="IntroRight">
        <BtcSlider value={this.state.amountTo}
        onChange={this.setAmount}
        />
        <CurrencyInput options={currencyOptions} inputLabel from
        value={this.state.amountFrom}
        onChange={this.setAmount} 
        />
        <div className = "IntroRightBuffer">
          <img src={dots} alt='dots' /> 
          <span>For <span className="inputDisplay">${this.state.amountFrom} USD</span> you will get <span className="inputDisplay">{this.state.amountTo} Bitcoin</span></span>
        </div>
        <CurrencyInput options={btcOptions} to
        value={this.state.amountTo}
        onChange={this.setAmount} 
        />
        <Button className="continueBtn" color='green' fluid size='large'>Continue</Button>
      </Segment>
    );
  }
}

export default IntroRight;