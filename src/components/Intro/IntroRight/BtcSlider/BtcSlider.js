import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

class BtcSlider extends React.Component {
  
  constructor(props) {
    super(props);
    
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange = (e)=>{
    this.props.onChange(e,'slider');
  }
  
  render() {
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
      0.05: markLabel(0.05),
      0.15:markLabel(0.15),
      0.25:markLabel(0.25),
      0.35:markLabel(0.35),
      0.45:markLabel(0.45),
      0.55:markLabel(0.55),
      0.65:markLabel(0.65),
      0.75:markLabel(0.75),
      0.85:markLabel(0.85),
      0.95:markLabel(0.95),
      1.05:markLabel(1.05),
      1.15:markLabel(1.15)
    };
    
    const {value} = this.props;
    
    return (
      <div className="Slider">
        <Slider min={0} max={1.15} step={0.01}
          railStyle={railStyle} 
          handleStyle={handleStyle} 
          trackStyle={trackStyle} 
          dotStyle={dotStyle}
          marks={marks} 
          value={parseFloat(value)} 
          onChange = {this.handleChange}
          />
      </div>
    );
  }
}

export default BtcSlider;