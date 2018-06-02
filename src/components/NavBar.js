import React, { Component } from 'react';
import {Link } from 'react-router-dom'

class  NavBar extends Component {
  render() {
      if(this.props.authenticated  && this.props.userType==1){
          return (
      <div >
      
        <Link to='/about'>About</Link>
       <Link to='/contact'>Contact Us</Link>
       <Link to='/frequently-asked-questions'>FAQ</Link>
       <button>Submit </button>
        <button onClick= {this.props.logOut}>Log Out </button>
       
      </div>
    
    );

      }else if(this.props.authenticated  && this.props.userType==2){
    return (
      <div >
         <p>Welcome Reviewer You have 10 new applications and 4 unprocessed application</p> 
   
        <button>Sign Out </button>
       
      </div>
    
    );
  }else if(this.props.authenticated  && this.props.userType==3){
    return (
      <div >
       <p>Welcome Processor You have 8 new applications and 2 unprocessed application</p> 
   
        <button>Sign Out </button>
       
      </div>
    
    );
  } else{
return (
      <div >
       <Link to='/'>Home</Link>
       <Link to='/about'>About</Link>
       <Link to='/contact'>Contact Us</Link>
       <Link to='/frequently-asked-questions'>FAQ</Link>
       <button onClick= {this.props.register}>Register Here </button>
        <Link to= '/signIn'>Sign In</Link>
       
      </div>
)

  }
  }
}

export default NavBar;
