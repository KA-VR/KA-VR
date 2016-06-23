import React from 'react';
import UserStatsContainer from '../containers/UserStatsContainer';
import WidgetsContainer from '../containers/WidgetsContainer';
import ChatboxContainer from '../containers/ChatboxContainer';
import AvatarContainer from '../containers/AvatarContainer';

const Dashboard = (props) => (
  <div>
    <h3>This is the Dashboard view</h3>
    <button onClick={props.click}>User Settings</button>
    <WidgetsContainer />
    <AvatarContainer />
    <UserStatsContainer />
    <ChatboxContainer />
  </div>
);

export default Dashboard;
