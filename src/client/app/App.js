/* eslint-disable no-console */
import React, { PropTypes } from 'react';
import CanvasContainer from '../canvas/CanvasContainer';
import ModalContainer from '../modals/ModalContainer';
import DashboardLayout from '../dashboard/DashboardLayout';
// import SignInContainer from '../auth/SignInContainer';
// import SignUpContainer from '../auth/SignUpContainer';

const App = () => (
  <div>
    <CanvasContainer />
    <DashboardLayout />
    <ModalContainer />
  </div>
);

App.propTypes = {
  authState: PropTypes.object,
};

export default App;
