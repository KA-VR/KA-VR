/* eslint-disable no-console*/
import { connect } from 'react-redux';
import SignUp from './SignUp';
import { submitSignup, redirectSignIn } from '../actions/Auth';

const mapStateToProps = (state) => {
  const { authState } = state;
  return {
    authState,
  };
};

const mapDispatchToProps = dispatch => ({
  dispatch,
  signUp: e => {
    e.preventDefault();
    return dispatch(submitSignup());
  },
  redirSignIn: e => {
    e.preventDefault();
    console.log('clicked');
    return dispatch(redirectSignIn());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
