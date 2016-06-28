import React from 'react';
import TaskWidgetContainer from '../containers/TaskWidgetContainer';

const Widget = (props) => (
  <div className="widget">
    <h5>Widgets Go Here</h5>
    <TaskWidgetContainer />
    <button onClick={props.change}>Add Widget</button>
  </div>
);

Widget.propTypes = {
  change: React.PropTypes.func,
};

export default Widget;
