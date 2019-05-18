import React from 'react';
import { Button } from 'semantic-ui-react'

class IntroLeft extends React.Component {
  
  render() {
    const IntroMessage = (props) => {
      const { message } = props;
      return (
        <div className='IntroMessage'>
          <span className="messageType">NEW</span>
          <span className="message">{message}</span>
        </div>
      );
    };
    
    const IntroTitle = (props) => {
      const{ title, subTitle } = props;
      return (
        <div className='IntroTitle'>
          <p className="title">{title}</p>
          <p className="subTitle">{subTitle}</p>
        </div>
      );
    }
    
    return (
      <div className='IntroLeft'>
        <IntroMessage
        message="Catch mouse and gave it as a present chew the plant but scratch"
        />
        <IntroTitle
        title="Buy Bitcoin with Credit Card"
        subTitle="Catch mouse and gave it as a present chew the plant but scratch me there, elevator butt. Always ensure to lay down in such a manner that tail can lightly brush."
        />
        <Button className="createAccount">Create Account</Button>
      </div>
    );
  }
}

export default IntroLeft;