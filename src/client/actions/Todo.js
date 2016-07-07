import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  COMPLETE_TODO,
  COMPLETE_ALL,
  CLEAR_COMPLETED,
} from './ActionTypes';

const addTodo = (text) => ({
  type: ADD_TODO,
  text,
});

const deleteTodo = (id) => ({
  type: DELETE_TODO,
  id,
});

const editTodo = (id, text) => ({
  type: EDIT_TODO,
  id,
  text,
});

const completeTodo = (id) => ({
  type: COMPLETE_TODO,
  id,
});

const completeAll = () => ({
  type: COMPLETE_ALL,
});

const clearCompleted = () => ({
  type: CLEAR_COMPLETED,
});

export {
  addTodo,
  deleteTodo,
  editTodo,
  completeTodo,
  completeAll,
  clearCompleted,
};
