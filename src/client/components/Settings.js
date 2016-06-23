import React from 'react';
import { Link } from 'react-router';

const Settings = (props) => (
  <div>
    <Link to="settings">User Settings</Link> 
    <h1>SETTINGS</h1>
  </div>
);

Settings.propTypes = {
  click: React.PropTypes.func,
};

export default Settings;