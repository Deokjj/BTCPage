import React from 'react';
import { Segment, Input, Label, Dropdown } from 'semantic-ui-react'

class CurrencyInput extends React.Component {
  constructor(props) {
    super(props);
    
    this.handelChange = this.handelChange.bind(this);
  }
  
  handelChange(e, data) {
    this.props.onChange(data.value,(this.props.from ? 'from' : 'to'));
  }

  render() {
    let { options, inputLabel, value } = this.props;
    return inputLabel ? (
      <Segment className="CurrencyInput">
        <Input transparent fluid value={value} 
        onChange={this.handelChange} 
        type="number" pattern="^\d*(\.\d{0,2})?$" min="0" step="100">
          <Label basic>$</Label>
          <input />
        </Input>
        <Dropdown options={options} defaultValue={options[0]['value']}/>
      </Segment>
    ): (
      <Segment className="CurrencyInput">
        <Input transparent fluid value={value} 
        onChange={this.handelChange} type="number" min="0" step="0.01"/>
        <Dropdown options={options} defaultValue={options[0]['value']}/>
      </Segment>
    );
  }
}

export default CurrencyInput;