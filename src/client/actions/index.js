import * as types from '../constants/ActionTypes';

export function addTask(text) {
  return {
    type: types.ADD_TASK, text,
  };
}

export function removeTask(id) {
  return {
    type: types.REMOVE_TASK, id,
  };
}

export function editTask(id, text) {
  return {
    type: types.EDIT_TASK, id, text,
  };
}

export function completeTask(id) {
  return {
    type: types.COMPLETE_TASK, id,
  };
}
