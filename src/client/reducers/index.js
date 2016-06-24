import { combineReducers } from 'redux';
import tasks from './tasks';

const Reducers = combineReducers({
  tasks,
});

export default Reducers;
