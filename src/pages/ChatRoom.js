import React, { Component } from 'react';

import firebase from '../firebase/firebase.js'

class  ChatRoom extends Component {
     constructor() {
    super();
    this.state = {
      currentMessage: '',
      username: 'ChatBot',
      messages:[]
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
componentDidMount() {
  const messageRef = firebase.database().ref('messages');
  messageRef.on('value', (snapshot) => {
    let messages = snapshot.val();
    let newState = [];
    for (let message in messages) {
      newState.push({
        id: message,
        title: messages[message].title,
        user: messages[message].user
      });
    }
    this.setState({
      messages: newState
    });
  });
}

  handleChange(e){
      this.setState({currentMessage: e.target.value})

  }
    handleSubmit(e){
          e.preventDefault();
          
  const messageRef = firebase.database().ref('messages');
  const message = {
    title: this.state.currentMessage,
    user: this.state.username
  }
   messageRef.push(message);
  this.setState({
    currentMessage: '',
   
  });

    }
  render() {
      const chatMessage = this.state.messages.map(message =>{
                return (
                    <div>
                        <h6> {message.user} said:</h6>
                        <p>{message.title}</p>

                    </div>
                )
      })
    return (
      <div >
       
        <h3>Welcome to the General ChatRoom </h3>

        <div className="chats">
            {chatMessage}
        </div>
        <form onSubmit={this.handleSubmit}>
       <input type= 'text' placeholder= 'Chat on!!!' value={this.state.currentMessage} onChange= {this.handleChange} />
<button> Send</button>
            </form>
      </div>
    );
  }
}

export default ChatRoom;
