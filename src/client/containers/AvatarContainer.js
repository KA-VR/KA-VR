import React, { Component } from 'react';
import Avatar from '../components/Avatar';

class AvatarContainers extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit() {
    console.log('Avatar clicked!');
  }
  render() {
    return (
      <Avatar
        click={this.handleSubmit}
      />
    );
  }
}

export default AvatarContainers;
