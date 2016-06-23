import React from 'react';

const Widget = (props) => (
  <div className="widget">
    <h5>Widgets Go Here</h5>
    <button onClick={props.change}>Add Widget</button>
  </div>
);

Widget.propTypes = {
  change: React.PropTypes.func,
};

export default Widget;
