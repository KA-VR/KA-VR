import {
  USER_SIGNIN,
  USER_SIGNUP,
  USER_SIGNOUT,
} from '../actions/ActionTypes';
import serialize from 'form-serialize';
import auth from '../auth/auth';

// Create auth action creators
const userSignin = (type, userData, signedIn) => ({
  type,
  userData,
  signedIn,
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
    const form = document.querySelector('#signin-form');
    const formData = serialize(form, { hash: true });
    console.log(form, formData);
    auth.signin(formData, (res) => {
      console.log('RESPONSE on SIGNIN FROM SERVER: ', res);
      if (res.response) {
        console.log('Error signing up');
      } else if (res.redirect === '/dashboard') {
        // window.location = res.redirect;
        dispatch(userSignin(USER_SIGNIN, formData, true));
      }
    });
  };

const submitSignup = () =>
  dispatch => {
    dispatch(userSignup());
  };

const executeSignout = () =>
  dispatch => {
    dispatch(userSignout());
  };

export {
  submitSignin,
  submitSignup,
  executeSignout,
};
