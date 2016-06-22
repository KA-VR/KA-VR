import React from 'react';
import {
  Router,
  Route,
  browserHistory,
  // IndexRoute,
} from 'react-router';

// Layouts
import MainLayout from '../layouts/MainLayout';
import PortalLayout from '../layouts/PortalLayout';

// Pages
import SignInContainer from '../containers/SignInContainer';
import SignUpContainer from '../containers/SignUpContainer';
import DashboardContainer from '../containers/DashboardContainer';
import SpeechToTextContainer from '../containers/SpeechToTextContainer';

export default (
  <Router history={browserHistory}>
    <Route component={MainLayout}>
      <Route component={PortalLayout}>
        <Route path="/" component={SignInContainer} />
        <Route path="signup" component={SignUpContainer} />
        <Route path="dashboard" component={DashboardContainer} />
        <Route path="speech" component={SpeechToTextContainer} />
      </Route>
    </Route>
  </Router>
);
