import React from 'react';
import { Segment, Input, Label, Dropdown } from 'semantic-ui-react'

class CurrencyInput extends React.Component {
  constructor(props) {
    super(props);
    
    this.handleChange = this.handleChange.bind(this);
    this.handleCurrencyChange = this.handleCurrencyChange.bind(this);
  }
  
  handleChange(e, data) {
    this.props.onChange(data.value,(this.props.from ? 'from' : 'to'));
  }
  
  handleCurrencyChange(e, data) {
    this.props.onCurrencyChange(data.value, (this.props.from ? 'from' : 'to'));
  }

  render() {
    let { options, inputLabel, value, currencyValue } = this.props;
    
    const getLabel = 
    (currencyValue === 'USD' ? '$' : (
        currencyValue === 'CAD' ? 'C$' : '₩'
    ));
  
    
    return inputLabel ? (
      <Segment className="CurrencyInput">
        <Input transparent fluid value={value} 
        onChange={this.handleChange} 
        type="number" pattern="^\d*(\.\d{0,2})?$" min="0" step="100">
          <Label basic>{getLabel}</Label>
          <input />
        </Input>
        <Dropdown 
        options={options} 
        defaultValue={options[0]['value']}
        onChange={this.handleCurrencyChange}/>
      </Segment>
    ): (
      <Segment className="CurrencyInput">
        <Input transparent fluid value={value} 
        onChange={this.handleChange} type="number" min="0" step="0.01"/>
        <Dropdown options={options} defaultValue={options[0]['value']}/>
      </Segment>
    );
  }
}

export default CurrencyInput;