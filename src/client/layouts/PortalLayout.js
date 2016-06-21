import React from 'react';
import { Link } from 'react-router';

const PortalLayout = (props) => (
  <div className="portallayout">
    <h1>Portal Layout</h1>
    <main>
      {props.children}
    </main>
  </div>
);

export default PortalLayout;
