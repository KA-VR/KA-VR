import {
  USER_SIGNIN,
  USER_SIGNUP,
  USER_SIGNOUT,
  REDIRECT_SIGNIN,
  REDIRECT_SIGNUP,
} from '../actions/ActionTypes';
import serialize from 'form-serialize';
import auth from '../auth/auth';

// Create auth action creators
const userSignin = (type, userData, signedIn, currentPage) => ({
  type,
  userData,
  signedIn,
  currentPage,
});

const userSignup = (type, userData, signedIn, currentPage) => ({
  type,
  userData,
  signedIn,
  currentPage,
});

const userSignout = (type, signedIn, currentPage) => ({
  type,
  signedIn,
  currentPage,
});

const viewSignIn = (type, currentPage) => ({
  type,
  currentPage,
});

const viewSignUp = (type, currentPage) => ({
  type,
  currentPage,
});

// Auth Actions
const submitSignin = () =>
  dispatch => {
    const form = document.querySelector('#signin-form');
    const formData = serialize(form, { hash: true });
    auth.signin(formData, (res) => {
      console.log('RESPONSE on SIGNIN FROM SERVER: ', res);
      if (res.response) {
        console.log('Error signing up');
      } else if (res.redirect === '/dashboard') {
        // window.location = res.redirect;
        dispatch(userSignin(USER_SIGNIN, formData, true, 'dashboard'));
      }
    });
  };

const submitSignup = () =>
  dispatch => {
    const form = document.querySelector('#signup');
    const formData = serialize(form, { hash: true });
    auth.signup(formData, (res) => {
      if (res.response !== '/dashboard') {
        console.log(res.response);
      } else {
        dispatch(userSignup(USER_SIGNUP, formData, true, 'dashboard'));
      }
    });
  };

const executeSignout = () =>
  dispatch => {
    window.localStorage.clear();
    document.cookie = "email=; expires=Thu, 01 Jan 1900 00:00:00 UTC";
    dispatch(userSignout(USER_SIGNOUT, false, 'signIn'));
  };

const redirectSignIn = () =>
  dispatch => {
    dispatch(viewSignIn(REDIRECT_SIGNIN, 'signIn'));
  };

const redirectSignUp = () =>
  dispatch => {
    dispatch(viewSignUp(REDIRECT_SIGNUP, 'signUp'));
  };

export {
  submitSignin,
  submitSignup,
  executeSignout,
  redirectSignIn,
  redirectSignUp,
};
