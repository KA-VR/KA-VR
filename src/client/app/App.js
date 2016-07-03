import React from 'react';
import SpeechContainer from '../speech/SpeechContainer';
import CanvasContainer from '../canvas/CanvasContainer';
import ModalContainer from '../modals/ModalContainer';
import DashboardLayout from '../dashboard/DashboardLayout';

const App = () => (
  <div>
    <CanvasContainer />
    <DashboardLayout />
    <ModalContainer />
  </div>
);

export default App;
