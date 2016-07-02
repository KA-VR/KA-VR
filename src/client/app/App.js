import React from 'react';
import SpeechContainer from '../speech/SpeechContainer';
import CanvasContainer from '../canvas/CanvasContainer';
import ModalContainer from '../modals/ModalContainer';

const App = () => (
  <div>
    <ModalContainer />
    <CanvasContainer />
    <SpeechContainer />
  </div>
);

export default App;
