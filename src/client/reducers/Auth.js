import {
  USER_SIGNIN,
  USER_SIGNUP,
  USER_SIGNOUT,
} from '../actions/ActionTypes';

const authState = (state = {
  signedIn: Boolean(localStorage.getItem('KAVR')),
  // signUpView: false,
}, action) => {
  switch (action.type) {
    case USER_SIGNIN:
      return Object.assign({}, state, {
        state: action.state,
        userData: action.userData,
        signedIn: action.signedIn,
      });
    case USER_SIGNUP:
      return Object.assign({}, state, {
        state: action.state,
        signedIn: action.signedIn,
      });
    case USER_SIGNOUT:
      return Object.assign({}, state, {
        state: action.state,
        signedIn: action.signedIn,
      });
    default:
      return state;
  }
};

export { authState };
