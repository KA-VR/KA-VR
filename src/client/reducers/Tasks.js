import {
  ADD_TASK,
  EDIT_TASK,
  DELETE_TASK,
  COMPLETE_TASK
} from '../constants/ActionTypes';

const initialState = [
  {
    text: 'Learn Dashboard',
    complete: false,
    id: 0,
  }
];

const Tasks = (state, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {

      };

    case EDIT_TASK:
      return {

      };

    case DELETE_TASK:
      return {

      };

    case COMPLETE_TASK:
      return {

      };

    default:
      return state;
  }
};

export default Tasks;