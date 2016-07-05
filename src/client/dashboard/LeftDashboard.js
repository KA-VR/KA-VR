// import React, { PropTypes } from 'react';
import React, { PropTypes } from 'react';

// Import calendar, settings components
const LeftDashboard = ({ signOut }) => (
  <div className="leftdashboard hide-on-small-only col m4">
    <button
      className="submit-button waves-effect waves-light btn"
      onClick={signOut}
    >Signout
    </button>
    <div>Calendar</div>
    <div>Settings</div>
  </div>
);

LeftDashboard.propTypes = {
  signOut: PropTypes.func,
};

export default LeftDashboard;
