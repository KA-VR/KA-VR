import React from 'react';
import LeftDashboardContainer from './LeftDashboardContainer';
import RightDashboardContainer from './RightDashboardContainer';
import SpeechContainer from '../speech/SpeechContainer';

const DashboardLayout = () => (
  <div className="dashboardlayout">
    <LeftDashboardContainer />
    <SpeechContainer />
    <RightDashboardContainer />
  </div>
);

export default DashboardLayout;
