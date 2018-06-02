import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ProtectedRoute from './components/ProtectedRoute'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import About from './pages/About'
import FAQ from './pages/FAQ'
import Contact from './pages/Contact'
import SignIn from './pages/SignIn'
import RegistrationPage from './pages/RegistrationPage'
import ReviewerDashboard from './pages/ReviewerDashboard'
import ProcessorDashboard from './pages/ProcessorDashboard'


import firebase, { auth, provider } from './firebase/firebase.js';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      auth: true,
      userType: 0,
      user: null
    }
  }

register() {
  console.log('working')
  auth.signInWithPopup(provider) 
    .then((result) => {
      const user = result.user;
      this.setState({
        user,
        userType: 1
      });
      
    });
}
  applicantLogout() {
  auth.signOut()
    .then(() => {
      this.setState({
        user: null,
         userType: 0
      });
    });
}
  signInA(){
    console.log('A')
    this.setState({
      user: {
        name: 'reviewer',

      },
      userType: 2

    })
  }

   signInB(){
    this.setState({
      user: {
        name: 'processor',

      },
      userType: 3

    })
  }
  render() {

    
     const redirReg = this.state.user && this.state.userType == 1
     const redirRev = this.state.user && this.state.userType == 2
    return (
    
     
      <div>
        {redirReg && <Redirect to="/e-drivers-Licence-Reg" />}
         {redirRev && <Redirect to="/review-applications" />}
        <NavBar  
        user={this.state.user}  
        authenticated = {this.state.auth} 
        userType= {this.state.userType} 
        register = {this.register.bind(this)}
        logOut = {this.applicantLogout.bind(this)}
         />
      <Switch>
       
        <Route  path='/' component= {Home} exact />
         <Route  path='/about' component= {About} />
          <Route  path='/frequently-asked-questions' component= {FAQ} />
           <Route  path='/contact-us' component= {Contact} />
         <Route path='/signIn' render= {user => (
    
      <SignIn  signInA={this.signInA.bind(this)} signInB={this.signInB.bind(this)}/>
   
  )}   />
          <ProtectedRoute path='/e-drivers-Licence-Reg' render= {user => (
    
      <RegistrationPage user={this.state.user}/>
   
  )} authenticated = {this.state.auth} />
          <ProtectedRoute path='/review-applications' component= {ReviewerDashboard} authenticated = {this.state.auth} user= {this.state.user}  />
          <ProtectedRoute path='/process-applications' component= {ProcessorDashboard} authenticated = {this.state.auth}user= {this.state.user} />
       
       </Switch>
      </div>
     
    );
  }
}

export default App;
