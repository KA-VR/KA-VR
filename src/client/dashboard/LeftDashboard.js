// import React, { PropTypes } from 'react';
import React, { PropTypes } from 'react';
import WeatherContainer from '../widgets/WeatherContainer';

// Import calendar, settings components
const LeftDashboard = () => (
  <div className="leftdashboard hide-on-small-only col m3">
    <WeatherContainer />
  </div>
);

LeftDashboard.propTypes = {
  signOut: PropTypes.func,
};

export default LeftDashboard;
