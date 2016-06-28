import {
  ADD_TASK,
  REMOVE_TASK,
  EDIT_TASK,
  COMPLETE_TASK,
} from '../constants/ActionTypes';

const initialState = [
  {
    text: 'Use Redux',
    completed: false,
    id: 0,
  },
];

export default function tasks(state = initialState, action) {
  switch (action.type) {
    case ADD_TASK:
      return [
        {
          id: state.reduce((maxId, task) => Math.max(task.id, maxId), -1) + 1,
          completed: false,
          text: action.text,
        },
        ...state,
      ];

    case REMOVE_TASK:
      return state.filter(task =>
        task.id !== action.id
      );

    case EDIT_TASK:
      return state.map(task => {
        let copy;
        if (task.id === action.id) {
          copy = Object.assign({}, task, { text: action.text });
        }
        return copy || task;
      });

    case COMPLETE_TASK:
      return state.map(task => {
        let copy;
        if (task.id === action.id) {
          copy = Object.assign({}, task, { completed: !task.completed });
        }
        return copy || task;
      });

    default:
      return state;
  }
}
