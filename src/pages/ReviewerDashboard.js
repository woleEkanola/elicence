import React, { Component } from 'react';

import firebase from '../firebase/firebase.js'

class  ReviewerDashboard extends Component {
  constructor(props){
    super(props)
    this.state= {}
  }
   componentDidMount() {
  const applicationRef = firebase.database().ref('application');
  applicationRef.on('value', (snapshot) => {
    let applications = snapshot.val();
    let newState = [];
    for (let application in applications) {
      console.log('x', application)
      newState.push({
        id: application,
       fName: applications[application].fName
      });
    }
    this.setState({
      applications: newState
    });
  });
}
  render() {
    return (
      <div >
       
        <h3> ReviewerDashboard</h3>
       
      </div>
    );
  }
}

export default ReviewerDashboard;
