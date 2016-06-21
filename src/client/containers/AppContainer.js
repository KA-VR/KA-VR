import React, { Component } from 'react';
import App from '../components/App';

class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: [],
    };
  }

  render() {
    return (
      <App />
    );
  }
}

export default AppContainer;
