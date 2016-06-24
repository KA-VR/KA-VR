import React, { Component, PropTypes } from 'react';
import TaskItem from './TaskItem';
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../constants/TaskFilters';

const TASK_FILTER = {
  [SHOW_ALL]: () => true,
  [SHOW_ACTIVE]: task => !task.completed,
  [SHOW_COMPLETED]: task => task.completed,
};

class CurrentTaskList extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = { filter: SHOW_ALL };
    this.handleClearCompleted = this.handleClearCompleted.bind(this);
    this.handeShow = this.handleShow.bind(this);
  }

  handleClearCompleted() {
    this.props.actions.clearCompleted();
  }

  handleShow(filter) {
    this.setState({ filter });
  }

  render() {
    const { tasks, actions } = this.props;
    const { filter } = this.state;
    const filteredTasks = tasks.filter(TASK_FILTER[filter]);

    return (
      <section className="main">
        <ul className="task-list">
          {filteredTasks.map(task =>
            <TaskItem key={task.id} task={task} {...actions} />
          )}
        </ul>
      </section>
    );
  }
}

CurrentTaskList.propTypes = {
  tasks: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

export default CurrentTaskList;
