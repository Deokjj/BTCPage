import React from 'react';
import { Button } from 'semantic-ui-react';
import SignupModal from './SignupModal/SignupModal';
import axios from 'axios';

const apiAdress = process.env.REACT_APP_API_ADDRESS || "https://btc-server.herokuapp.com";

class IntroHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user : undefined
    };
    
    this.signUp = this.signUp.bind(this);
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
    // this.checkLogin = this.checkLogin.bind(this);
  }
  
  componentDidMount() {
    // this.checkLogin();
  }
  
  // checkLogin() {
  //   axios.get(`${apiAdress}/user/checklogin`)
  //   .then((res)=>{
  //     console.log(res);
  //   })
  //   .catch((err)=>{
  //     console.log(err);
  //   });
  // }
  
  signUp(email, password, name){
    const body = {
      email : email,
      password : password,
      name : name
    };
    
    axios.post(`${apiAdress}/user/signup`,body)
    .then((res)=>{
      console.log([res, res.data]);
      this.setState({
        user: res.data.user
      });
    })
    .catch((err)=>{
      console.log(err);
    });
  }
  
  logIn(email, password) {
    const body = {
      email : email,
      password : password
    }
    
    axios.post(`${apiAdress}/user/login`, body)
    .then((res)=>{
      console.log([res, res.data]);
      this.setState({
        user: res.data.user
      });
    })
    .catch((err)=>{
      console.log(err);
    });
  }
  
  logOut() {
    axios.post(`${apiAdress}/user/logout`)
    .then((res)=>{
      console.log(res);
      this.setState({ user : undefined });
    })
    .catch((err)=>{
      console.log(err);
    });
  }
    
  render() {
    const {user} = this.state;
    return (
      <div className="IntroHeader">
      <p>Changelly</p>
      {user ? (
        <p> Hello, {user.name}! 
          <Button onClick={this.logOut} className="Logout"> Log Out </Button> 
        </p>
      ) : (
        <SignupModal signUp= {this.signUp} logIn={this.logIn}/>
      )}
      </div>
    );
  }
}

export default IntroHeader;