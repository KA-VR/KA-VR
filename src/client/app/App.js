import React, { PropTypes } from 'react';
// import SpeechContainer from '../speech/SpeechContainer';
import CanvasContainer from '../canvas/CanvasContainer';
import ModalContainer from '../modals/ModalContainer';
import DashboardLayout from '../dashboard/DashboardLayout';
import SignInContainer from '../auth/SignInContainer';
import SignUpContainer from '../auth/SignUpContainer';
// import SignUpContainer from '../auth/SignUpContainer';

const App = ({ authState }) => {
  console.log(authState);
  // If the sign up view is true, render
  if (authState.currentPage === 'signUp') {
    return <SignUpContainer />;
  }
  if (authState.signedIn) {
    return (
      <div>
        <CanvasContainer />
        <DashboardLayout />
        <ModalContainer />
      </div>
    );
  }
  return <SignInContainer />;
};

App.propTypes = {
  authState: PropTypes.object,
};

export default App;
