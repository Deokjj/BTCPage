import './SignupModal.scss';
import React from 'react';
import { Modal, Icon, Divider, Header, Button, Form } from 'semantic-ui-react'

class SignupModal extends React.Component {
  constructor(props){
    super(props);
    
    this.state = {
      windowWidth: 0,
      submitEmail: '',
      submitPwd: '',
      submitName: '',
      loginEmail: '',
      loginPwd : ''
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.handleFormChange = this.handleFormChange.bind(this);
    this.handleSignupSubmit = this.handleSignupSubmit.bind(this);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
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
  
  handleFormChange (e,{name, value}) {
    this.setState({ [name]: value })
  }
  
  handleSignupSubmit () {
    this.props.signUp(this.state.submitEmail, this.state.submitPwd, this.state.submitName);
  }
  
  handleLoginSubmit () {
    this.props.logIn(this.state.loginEmail, this.state.loginPwd);
  }

  render() {
    const { windowWidth ,
      submitEmail, submitPwd, submitName,
      loginEmail, loginPwd} = this.state;
    return(
      <Modal className='SignupModal' closeIcon
      trigger={<p>Sign in <Icon name="arrow right"/></p>}>
      
        <div className="modalWrapper">
          <Modal.Content>
            <Header>Log In</Header>
            <Form onSubmit={this.handleLoginSubmit}>
              <Form.Field>
                <label>Email</label>
                <Form.Input 
                placeholder='email@email.com' 
                name="loginEmail"
                value={loginEmail}
                onChange={this.handleFormChange}/>
              </Form.Field>
              <Form.Field>
                <label>Password</label>
                <Form.Input
                name="loginPwd"
                value={loginPwd}
                onChange={this.handleFormChange} />
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
            <Form onSubmit={this.handleSignupSubmit}>
              <Form.Field>
                <label>Email</label>
                <Form.Input 
                placeholder='email@email.com' 
                name="submitEmail"
                value={submitEmail}
                onChange={this.handleFormChange}/>
              </Form.Field>
              <Form.Field>
                <label>Name</label>
                <Form.Input 
                name="submitName"
                value={submitName}
                onChange={this.handleFormChange}/>
              </Form.Field>
              <Form.Field>
                <label>Password</label>
                <Form.Input 
                name="submitPwd"
                value={submitPwd}
                onChange={this.handleFormChange}/>
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