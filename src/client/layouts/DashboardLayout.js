import React from 'react';
// import DashboardContainer from '../containers/DashboardContainer';

const DashboardLayout = (props) => (
  <div>
    <h4> This is the DashboardLayout </h4>
    <main>
      {props.children}
    </main>
  </div>
);

DashboardLayout.propTypes = {
  children: React.PropTypes.element,
};

export default DashboardLayout;