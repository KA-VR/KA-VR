/* eslint-disable no-console*/
import { connect } from 'react-redux';
import SignIn from './SignIn';
import { submitSignin, redirectSignUp } from '../actions/Auth';

const mapStateToProps = (state) => {
  const { authState, geoState } = state;
  return {
    authState,
    geoState,
  };
};

const mapDispatchToProps = dispatch => ({
  dispatch,
  signIn: e => {
    e.preventDefault();
    return dispatch(submitSignin());
  },
  redirSignUp: e => {
    e.preventDefault();
    return dispatch(redirectSignUp());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
