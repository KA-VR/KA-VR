import React, { Component } from 'react';
import Dashboard from '../components/Dashboard';
import { browserHistory } from 'react-router';

class DashboardContainer extends Component {
  constructor(props) {
    super(props);
    this.handleUserSettings = this.handleUserSettings.bind(this);
    this.handleUserProfile = this.handleUserProfile.bind(this);
  }
  handleUserProfile() {
    // Take in functions here

  }
  handleUserSettings() {
    browserHistory.push('/settings');
  }
  render() {
    return (
      <Dashboard
        data={this.handleUserProfile}
        click={this.handleUserSettings}
      />
    );
  }
}

export default DashboardContainer;
