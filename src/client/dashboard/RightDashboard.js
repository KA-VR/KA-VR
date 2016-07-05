// import React, { PropTypes } from 'react';
import React from 'react';
import QuotesContainer from '../quotes/QuotesContainer';

// Import calendar, settings components
const RightDashboard = () => (
  <div className="rightdashboard hide-on-small-only col m4">
    <div>Task Widget</div>
    <div>Placeholder Widget</div>
    <div>
      <QuotesContainer />
    </div>
  </div>
);

export default RightDashboard;
