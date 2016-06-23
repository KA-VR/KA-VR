import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import Settings from '../components/Settings';

class SettingsContainer extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit() {
    browserHistory.push('/settings');
  }
  render() {
    return (
      <Settings />
    );
  }
}

export default SettingsContainer;