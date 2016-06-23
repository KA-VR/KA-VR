import React, { Component } from 'react';
import TaskTextInput from '../components/TaskTextInput';

class TaskTextInputContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <TaskTextInput />
    );
  }
}

export default TaskTextInputContainer;
