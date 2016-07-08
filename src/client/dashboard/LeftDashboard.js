// import React, { PropTypes } from 'react';
import React, { PropTypes } from 'react';
import WeatherContainer from '../widgets/WeatherContainer';

// Import calendar, settings components
const LeftDashboard = ({ signOut }) => (
  <div className="leftdashboard hide-on-small-only col m3">
    <div className="container">
      <button
        className="submit-button"
        onClick={signOut}
      >Signout
      </button>
    </div>
    <WeatherContainer />
  </div>
);

LeftDashboard.propTypes = {
  signOut: PropTypes.func,
};

export default LeftDashboard;
