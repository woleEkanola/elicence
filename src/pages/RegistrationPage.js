import React, { Component } from 'react';

import {Redirect} from 'react-router-dom'

import RegistrationForm from  '../components/RegistrationForm'


class  RegistrationPage extends Component {
  render() {
    return (
      <div >
       <p>Welcome  {this.props.user.displayName}</p> 
       <img src={this.props.user.photoURL} />
        <RegistrationForm user= {this.props.user}/>
       
      </div>
    );
  }
}

export default RegistrationPage;
