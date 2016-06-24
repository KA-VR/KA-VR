import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger'; /* Console logs our states */
import thunk from 'redux-thunk';  // For asynchronous calls
import Reducers from '../reducers/index.js';

const logger = createLogger();

// Create store
const Store = createStore(Reducers, applyMiddleware(thunk, logger));

export default Store;
