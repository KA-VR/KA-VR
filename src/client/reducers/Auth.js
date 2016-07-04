import {
  USER_SIGNIN,
  USER_SIGNUP,
  USER_SIGNOUT,
} from '../actions/ActionTypes';

const authState = (state = {
  state: 'none',
  signedIn: null,
}, action) => {
  switch (action.type) {
    case USER_SIGNIN:
      return Object.assign({}, state, {
        state: action.state,
        data: action.data,
      });
    case USER_SIGNUP:
      return Object.assign({}, state, {
        state: action.state,
        data: action.data,
      });
    case USER_SIGNOUT:
      return Object.assign({}, state, {
        state: action.state,
        data: action.data,
      });
    default:
      return state;
  }
};

const leftDashboardState = (state = {
  state: 'none',
  signedIn: false,
}, action) => {

};

const rightDashboardState = (state = {
  state: 'none',
  signedIn: false,
}, action) => {

};

export { authState, leftDashboardState, rightDashboardState };
