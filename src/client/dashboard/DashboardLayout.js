import React from 'react';
import LeftDashboardContainer from './LeftDashboardContainer';
import RightDashboardContainer from './RightDashboardContainer';
import SpeechContainer from '../speech/SpeechContainer';

const DashboardLayout = () => (
  <div className="dashboardlayout row">
    <LeftDashboardContainer />
    <SpeechContainer />
    <RightDashboardContainer />
    <div className="logo"></div>
  </div>
);

export default DashboardLayout;
