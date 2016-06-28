import React from 'react';
import Canvas from '../components/Canvas';

// import { Link } from 'react-router';

const PortalLayout = (props) => (
  <div className="portallayout">
    <Canvas />
    <main>
      {props.children}
    </main>
  </div>
);

PortalLayout.propTypes = {
  children: React.PropTypes.element,
};

export default PortalLayout;
