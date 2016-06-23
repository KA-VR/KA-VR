import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// Import Reducers
import Tasks from './Tasks';

const Reducers = combineReducers({
  Tasks,
});

export default Reducers;
