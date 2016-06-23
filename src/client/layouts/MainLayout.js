import React from 'react';
// import Link from 'react-router';

const MainLayout = (props) => (
  <div>
    <main>
      {props.children}
    </main>
  </div>
);

MainLayout.propTypes = {
  children: React.PropTypes.element,
};

export default MainLayout;
