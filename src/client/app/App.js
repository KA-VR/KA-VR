/* eslint-disable no-console */
import React, { PropTypes } from 'react';
import CanvasContainer from '../canvas/CanvasContainer';
import ModalContainer from '../modals/ModalContainer';
import DashboardLayout from '../dashboard/DashboardLayout';
import SignInContainer from '../auth/SignInContainer';
import SignUpContainer from '../auth/SignUpContainer';
import QuotesContainer from '../quotes/QuotesContainer';

const App = ({ authState }) => {
  console.log('Auth State: ', authState);
  // If the sign up view is true, render
  if (authState.currentPage === 'signUp') {
    return <SignUpContainer />;
  }
  if (authState.currentPage === 'dashboard' || localStorage.getItem('KAVR')) {
    return (
      <div>
        <QuotesContainer />
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
