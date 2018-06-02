import React, { Component } from 'react';


class  SignIn extends Component {
  render() {
    return (
      <div >
       
       <button onClick={this.props.signInA} >Reviewer</button>
       <button onClick={this.props.signInB} >processor</button>
       
      </div>
    );
  }
}

export default SignIn;
