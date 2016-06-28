import React, { PropTypes, Component } from 'react';
import TaskTextInput from '../components/TaskTextInput';

class TaskTextInputContainer extends Component {
  constructor(props) {
    super(props);
    this.handleSave = this.handleSave.bind(this);
  }
  handleSave(text) {
    if (text.length !== 0) {
      this.props.addTask(text);
    }
  }

  render() {
    return (
      <header className="header">
        <h1>TASKS</h1>
        <TaskTextInput
          newTask
          onSave={this.handleSave}
          placeholder="What needs to be done?"
        />
      </header>
    );
  }
}

TaskTextInputContainer.propTypes = {
  addTask: PropTypes.func.isRequired,
};

export default TaskTextInputContainer;
