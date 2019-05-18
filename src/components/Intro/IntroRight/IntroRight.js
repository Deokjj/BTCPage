import React from 'react';
import { Segment, Input, Label, Dropdown, Flag, Button } from 'semantic-ui-react'
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import dots from '../../../assets/dots.png';
import btc from '../../../assets/btc.png';

class IntroRight extends React.Component {
  
  
  render() {
    const BtcSlider = (props) => {
      const railStyle = {height:16};
      const handleStyle = [{width: 26, height: 26, marginLeft: -13, borderColor:'#B9F4BC'}];
      const trackStyle = [{height:16, backgroundColor: '#B9F4BC'}];
      const dotStyle = {bottom: -26, margin:0, width: 0, 
        borderRadius: 0, borderLeft: '1px solid #e9e9e9', borderRight: 0,
        borderTop:0, borderBottom:0};
      const markLabel = (label) => {
        return {
          style:{marginTop: 18},
          label: label
        };
      };
      const marks = {
        5: markLabel(0.05),
        15:markLabel(0.15),
        25:markLabel(0.25),
        35:markLabel(0.35),
        45:markLabel(0.45),
        55:markLabel(0.55),
        65:markLabel(0.65),
        75:markLabel(0.75),
        85:markLabel(0.85),
        95:markLabel(0.95),
        105:markLabel(1.05),
        115:markLabel(1.15)
      };
      
      return (
        <div className="Slider">
        <Slider min={0} max={115}
          railStyle={railStyle} handleStyle={handleStyle} trackStyle={trackStyle} dotStyle={dotStyle}
          marks={marks} included={false} defaultValue={1}/>
        </div>
      );
    };
    
    const getCountry = (flagName, currencyCode) =>{
      return (
        <div><Flag name={flagName} /> {currencyCode}</div>
      );
    };
    
    const currencyOptions = [
      {
        key  : 'USD',
        text : getCountry('us','USA'),
        value: 'USD',
      },
      {
        key  : 'CAD',
        text : getCountry('ca','CAD'),
        value: 'CAD',
        
      },
      {
        key  : 'WON',
        text : getCountry('kr','WON'),
        value: 'WON',
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
    
    const CurrencyInput = (props) => {
      const { options, inputLabel } = props;
      return inputLabel ? (
        <Segment className="CurrencyInput">
          <Input transparent>
            <Label basic>$</Label>
            <input />
          </Input>
          <Dropdown options={options} defaultValue={options[0]['value']}/>
        </Segment>
      ): (
        <Segment className="CurrencyInput">
          <Input transparent />
          <Dropdown options={options} defaultValue={options[0]['value']}/>
        </Segment>
      );
    };
    
    return (
      <Segment className="IntroRight">
        <BtcSlider />
        <CurrencyInput options={currencyOptions} inputLabel={true}/>
        <div className = "IntroRightBuffer">
          <img src={dots} alt='dots' /> <span>For 200 USD you will get 0.75454 Bitcoin</span>
        </div>
        <CurrencyInput options={btcOptions} />
        <Button className="continueBtn" color='green' fluid size='large'>Continue</Button>
      </Segment>
    );
  }
}

export default IntroRight;