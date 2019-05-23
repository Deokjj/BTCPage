import './SignupModal.scss';
import React from 'react';
import { Modal, Icon, Divider, Header, Button, Form } from 'semantic-ui-react'

class SignupModal extends React.Component {
  constructor(props){
    super(props);
    
    const {innerWidth} = window;
    this.state = {
      windowWidth: innerWidth
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  
  updateWindowDimensions() {
    const {innerWidth} = window;
    this.setState({
      windowWidth: innerWidth
    });
  }

  render() {
    // const MyDivider = (props) => {
    //     const windowWidth = props.windowWidth;
    //     if(windowWidth > )
    // }
    const { windowWidth } = this.state;
    return(
      <Modal className='SignupModal' closeIcon
      trigger={<p>Sign in <Icon name="arrow right"/></p>}>
      
        <div className="modalWrapper">
          <Modal.Content>
            <Header>Log In</Header>
            <Form>
              <Form.Field>
                <label>Email</label>
                <input placeholder='email@email.com' />
              </Form.Field>
              <Form.Field>
                <label>Password</label>
                <input />
              </Form.Field>
              <Button type='submit'>Submit</Button>
            </Form>
          </Modal.Content>
          {windowWidth > 480 ? (
            <Divider vertical>Or</Divider>
          ) : (
            <Divider horizontal>Or</Divider>
          )}
          
          <Modal.Content>
            <Header>Sign Up</Header>
            <Form>
              <Form.Field>
                <label>Email</label>
                <input placeholder='email@email.com' />
              </Form.Field>
              <Form.Field>
                <label>Name</label>
                <input />
              </Form.Field>
              <Form.Field>
                <label>Password</label>
                <input />
              </Form.Field>
              <Button type='submit'>Submit</Button>
            </Form>
          </Modal.Content>
        </div>
      </Modal>
    );
  }
}

export default SignupModal;