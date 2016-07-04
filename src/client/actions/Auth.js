import {
  USER_SIGNIN,
  USER_SIGNUP,
  USER_SIGNOUT,
} from '../actions/ActionTypes';

// Create auth action creators
const userSignin = (type, data, state) => ({
  type,
  data,
  state,
});

const userSignup = (type, data, state) => ({
  type,
  data,
  state,
});

const userSignout = (type, data, state) => ({
  type,
  data,
  state,
});

const submitSignin = () =>
  dispatch => {

  };

const submitSignup = () =>
  dispatch => {

  };

const executeSignout = () =>
  dispatch => {

  };

export {
  submitSignin,
  submitSignup,
  executeSignout,
};
