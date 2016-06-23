import React from 'react';
// import { Link } from 'react-router';

const PortalLayout = (props) => (
  <div className="portallayout">
    <main>
      {props.children}
    </main>
  </div>
);

PortalLayout.propTypes = {
  children: React.PropTypes.element,
};

export default PortalLayout;
