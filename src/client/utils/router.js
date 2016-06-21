import React from 'react';
import {
  Router,
  Route,
  browserHistory,
  // IndexRoute,
} from 'react-router';

// Layouts
import AppContainer from '../containers/AppContainer';
import PortalLayout from '../layouts/PortalLayout';

// Pages
import SignInContainer from '../containers/SignInContainer';
// import SignUpContainer from '../containers/SignUpContainer';
// import DashboardContainer from '../containers/DashboardContainer';

export default (
  <Router history={browserHistory}>
    <Route component={AppContainer}>
      <Route path="/signin" component={PortalLayout}><SignInContainer /></Route>
    </Route>
  </Router>
);
