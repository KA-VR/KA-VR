import React, { Component } from 'react';
import UserStats from '../components/UserStats';

class UserStatsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      UserStatsFakeData: {
        mostChecked: 'Weather',
        mostVoiced: 'Food Recommendations',
        mostSearched: 'Driving Directions',
      },
    };
    this.handleData = this.handleData.bind(this);
  }
  handleData() {
    console.log('Data');
  }
  render() {
    return (
      <UserStats
        stats={this.state.UserStatsFakeData}
      />
    );
  }

}

export default UserStatsContainer;
