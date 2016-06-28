import React, { Component } from 'react';
import Dashboard from '../components/Dashboard';
import { browserHistory } from 'react-router';

class DashboardContainer extends Component {
  constructor(props) {
    super(props);
    this.handleUserSettings = this.handleUserSettings.bind(this);
    this.handleUserProfile = this.handleUserProfile.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }
  componentWillMount() {
    if (!window.localStorage.getItem('KAVR')) {
      browserHistory.push('/');
    }
  }
  handleUserProfile() {
    // Take in functions here

  }
  handleUserSettings() {
    browserHistory.push('/settings');
  }
  handleLogout() {
    // Delete cookies
    window.localStorage.removeItem('KAVR');
    window.localStorage.removeItem('email');
    window.localStorage.removeItem('id');
    browserHistory.push('/');
  }
  render() {
    return (
      <Dashboard
        data={this.handleUserProfile}
        click={this.handleUserSettings}
        logout={this.handleLogout}
      />
    );
  }
}

export default DashboardContainer;
