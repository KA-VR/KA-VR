import React, { PropTypes } from 'react';
import UserStatsContainer from '../containers/UserStatsContainer';
import WidgetsContainer from '../containers/WidgetsContainer';
import ChatboxContainer from '../containers/ChatboxContainer';
import AvatarContainer from '../containers/AvatarContainer';

const Dashboard = (props) => (
  <div>
    <h3>This is the Dashboard view</h3>
    <button onClick={props.click}>User Settings</button>
    <button onClick={props.logout}>Logout</button>
    <WidgetsContainer />
    <AvatarContainer />
    <UserStatsContainer />
    <ChatboxContainer />
  </div>
);

Dashboard.propTypes = {
  click: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
};

export default Dashboard;
