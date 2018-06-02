import React, { Component } from 'react';

import {Link} from 'react-router-dom'

import firebase from '../firebase/firebase.js'

class  RegistrationForm extends Component {
    constructor(props){
        super(props)
        this.state= {
          completed: false
        }
    }
   
    handleSubmit(e){
        e.preventDefault()
         const applicationRef = firebase.database().ref('applications');
     
  const application = {
    firstName: this.state.fName,
    lastName: this.state.lName,
    DOB: this.state.DOB,
    gender: 'male',
    stateOfOrigin: this.state.stateOfOrigin,
    occupation: this.state.occupation,
    rAddress: this.state.rAddress,
    email: this.state.email,
    photoUrl: this.props.user.photoURL,
    approved: false

  }
   applicationRef.push(application);
this.setState({
  completed: true
})

    }
    handleChange(e){
        e.preventDefault()
        const target= e.target
        const value =  target.value
        const name = target.name

        this.setState({
            [name]: value
        })

    }
  render() {
    const successMessage= this.state.completed? <div className= 'success'><h1>Application Successful , We will contact you shortly</h1> <Link to='/'>Log Out</Link> </div>: null
    return (
      <div>
      <form  name='reg' onSubmit={this.handleSubmit.bind(this)} >
       <input type='text' name='fName' placeholder='First Name' onChange={this.handleChange.bind(this)}  />
       <input type='text' name='lName' placeholder='Last Name'onChange={this.handleChange.bind(this)}  />
       <input type='date' name='DOB' onChange={this.handleChange.bind(this)}  />
        <select name='Gender'  > 
      <option value="Gender">Gender</option>     
  <option defaultValue="Male">Male</option>
  <option  value="Female">Female</option>
  

</select>
       <input type='text' name='stateOfOrigin' placeholder='State of Origin'onChange={this.handleChange.bind(this)}  />
       <input type='text' name='occupation' placeholder='Occupation'onChange={this.handleChange.bind(this)}  />
       <input type='text' name='rAddress' placeholder='Residential Address'onChange={this.handleChange.bind(this)}  />
       <input type='email' name='email' placeholder='E-mail' defaultValue={this.props.user.email} onChange={this.handleChange.bind(this)} />
        
        <select name='ApplicationType'  > 
      <option value="ApplicationType">Application Type</option>     
  <option value="ArticulatedVehicle">Articulated Vehicle</option>
  <option value="Commercial">Commercial</option>
  <option value="Private">Private</option>
  <option value="Motocycle">Motocycle</option>

</select>

<input type='number' name='testScores' placeholder='Test Scores '  onChange={this.handleChange.bind(this)} />
<input type='text' name='state' placeholder='What state are you applying from'  onChange={this.handleChange.bind(this)} />
<input type='submit'  defaultValue='Submit'onChange={this.handleChange.bind(this)}  />
        
       </form>
      {successMessage}
      </div>
    );
  }
}

export default RegistrationForm;
