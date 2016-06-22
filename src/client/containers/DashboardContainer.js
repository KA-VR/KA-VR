import React, { Component } from 'react';
import Dashboard from '../components/Dashboard';
import UserStatsContainer from '../containers/UserStatsContainer';

class DashboardContainer extends Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <Dashboard />
    );
  }
}

export default DashboardContainer;
