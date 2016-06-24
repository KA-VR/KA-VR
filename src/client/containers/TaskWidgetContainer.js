import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import TaskTextInputContainer from '../containers/TaskTextInputContainer';
import CurrentTaskList from '../components/CurrentTaskList';
import * as TaskActions from '../actions';

class TaskWidgetContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { tasks, actions } = this.props;
    return (
      <div>
        <TaskTextInputContainer addTask={actions.addTask} />
        <CurrentTaskList tasks={tasks} actions={actions} />
      </div>
    );
  }
}

TaskWidgetContainer.propTypes = {
  tasks: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => (
  {
    tasks: state.tasks,
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    actions: bindActionCreators(TaskActions, dispatch),
  }
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskWidgetContainer);
