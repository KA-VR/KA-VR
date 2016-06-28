import React from 'react';
import {
  Router,
  Route,
  browserHistory,
  // IndexRoute,
} from 'react-router';

// Redux
import { Provider } from 'react-redux';
import Store from '../store/configurateStore';

// Layouts
import MainLayout from '../layouts/MainLayout';
import PortalLayout from '../layouts/PortalLayout';
import DashboardLayout from '../layouts/DashboardLayout';

// Pages
// import SignInContainer from '../containers/SignInContainer';
import SignUpContainer from '../containers/SignUpContainer';
import DashboardContainer from '../containers/DashboardContainer';
import SettingsContainer from '../containers/SettingsContainer';
import SpeechToTextContainer from '../containers/SpeechToTextContainer';

export default (
  <Provider store={Store}>
    <Router history={browserHistory}>
      <Route component={MainLayout}>
        <Route component={PortalLayout}>
          <Route path="/index.html" component={SpeechToTextContainer} />
          <Route path="signup" component={SignUpContainer} />
          <Route path="speech" component={SpeechToTextContainer} />
        </Route>
        <Route component={DashboardLayout}>
          <Route path="settings" component={SettingsContainer} />
          <Route path="dashboard" component={DashboardContainer} />
        </Route>
      </Route>
    </Router>
  </Provider>
);
