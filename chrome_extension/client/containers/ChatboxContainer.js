import React, { Component } from 'react';
import Chatbox from '../components/Chatbox';

class ChatboxContainer extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit() {
    console.log('Chatbox submit!');
  }
  render() {
    return (
      <Chatbox
        submit={this.handleSubmit}
      />
    );
  }

}

export default ChatboxContainer;
