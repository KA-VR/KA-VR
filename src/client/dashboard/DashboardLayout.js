import React from 'react';
import LeftDashboard from './LeftDashboard';
import RightDashboard from './RightDashboard';
import SpeechContainer from '../speech/SpeechContainer';

const DashboardLayout = () => (
  <div className="dashboardlayout row">
    <LeftDashboard />
    <SpeechContainer />
    <RightDashboard />
  </div>
);

export default DashboardLayout;
