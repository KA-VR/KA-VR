import React from 'react';
import SpeechContainer from '../speech/SpeechContainer';
import CanvasContainer from '../canvas/CanvasContainer';
import ModalContainer from '../modals/ModalContainer';
import LeftDashboardContainer from '../dashboard/LeftDashboardContainer';
import RightDashboardContainer from '../dashboard/RightDashboardContainer';

const App = () => (
  <div>
    <LeftDashboardContainer />
    <RightDashboardContainer />
    <ModalContainer />
    <CanvasContainer />
    <SpeechContainer />
  </div>
);

export default App;
