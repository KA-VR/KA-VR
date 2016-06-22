import React from 'react';

const UserStats = ({ stats }) => (
  <div className="UserStats">
    <h4> This is the UserStats View </h4>
    <ul>
      <strong>User Stats:</strong>
      <li>{stats.mostChecked}</li>
      <li>{stats.mostVoiced}</li>
      <li>{stats.mostSearched}</li>
    </ul>
  </div>
);

UserStats.propTypes = {
  stats: React.PropTypes.object,
};

export default UserStats;
