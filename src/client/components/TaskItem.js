import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import TaskTextInput from './TaskTextInput';

class TaskItem extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      editing: false,
    };
    this.handleDoubleClick = this.handleDoubleClick.bind(this);
  }

  handleDoubleClick() {
    this.setState({ editing: true });
  }

  handleSave(id, text) {
    if (text.length === 0) {
      this.props.removeTask(id);
    } else {
      this.props.editTask(id, text);
    }
    this.setState({ editing: false });
  }

  render() {
    const { task, completeTask, removeTask } = this.props;

    let element;
    if (this.state.editing) {
      element = (
        <TaskTextInput
          text={task.text}
          editing={this.state.editing}
          onSave={(text) => this.handleSave(task.id, text)}
        />
      );
    } else {
      element = (
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={task.completed}
            onChange={() => completeTask(task.id)}
          />
          <label onDoubleClick={this.handleDoubleClick}>
            {task.text}
          </label>
          <button
            className="destroy"
            onClick={() => removeTask(task.id)}
          />
        </div>
      );
    }

    return (
      <li
        className={classnames({
          completed: task.completed,
          editing: this.state.editing,
        })}
      >
        {element}
      </li>
    );
  }
}

TaskItem.propTypes = {
  task: PropTypes.object.isRequired,
  editTask: PropTypes.func.isRequired,
  removeTask: PropTypes.func.isRequired,
  completeTask: PropTypes.func.isRequired,
};

export default TaskItem;
