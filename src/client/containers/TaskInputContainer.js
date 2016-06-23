import React, { Component } from 'react';
import TaskInput from '../components/TaskInput';

class TaskInputContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <TaskInput />
    );
  }
}

export default TaskInputContainer;
