import React, { Component } from 'react';
import TaskWidget from '../components/TaskWidget';

class TaskWidgetContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TaskWidget />
    );
  }
}

export default TaskWidgetContainer;
