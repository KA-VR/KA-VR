import React, { Component } from 'react';
import Dashboard from '../components/Dashboard';

class DashboardContainer extends Component {
  constructor(props) {
    super(props);
    this.handleUserProfile = this.handleUserProfile.bind(this);
  }
  handleUserProfile() {
    // Take in functions here
  }
  render() {
    return (
      <Dashboard data={this.handleUserProfile} />
    );
  }
}

export default DashboardContainer;
