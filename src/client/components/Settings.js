import React from 'react';
import { Link } from 'react-router';

const Settings = (props) => (
  <div>
    <Link to="dashboard">Back to Dashboard</Link>
    <h3> Change Password </h3>
    <div>
      <input
        type="password"
        name="password"
        placeholder="password"
      />
    </div>
    <div>
      <input
        type="password"
        name="passwordConfirm"
        placeholder="confirm password"
      />
    </div>
    <button onClick={props.click}> Save Settings </button>
  </div>
);

Settings.propTypes = {
  click: React.PropTypes.func,
};

export default Settings;
