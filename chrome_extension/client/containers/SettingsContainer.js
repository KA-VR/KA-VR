import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import Settings from '../components/Settings';

class SettingsContainer extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.saveSettings = this.saveSettings.bind(this);
  }
  handleSubmit() {
    browserHistory.push('/settings');
  }
  saveSettings() {
    // Pass props back to server
    console.log('Settings Saved!');
  }
  render() {
    return (
      <Settings click={this.saveSettings} />
    );
  }
}

export default SettingsContainer;
