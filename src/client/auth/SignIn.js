import React, { PropTypes } from 'react';

const SignIn = ({ signIn, redirSignUp }) => (
  <div className="signin">
    <h1 className="center-align">Sign In</h1>
    <div className="row">
      <form id="signin-form" className="col offset-m3 m6 s12">
        <div className="input-field">
          <input type="email" name="email" id="email" />
          <label htmlFor="email">Email</label>
        </div>
        <div className="input-field">
          <input
            type="password"
            id="password"
            name="password"
          />
          <label htmlFor="password">Password</label>
        </div>
        <button
          className="submit-button waves-effect waves-light btn"
          onClick={signIn}
        >Sign In</button>
      </form>
      <div className="col s12 offset-m3 m6 link">
        <a onClick={redirSignUp}>Not a user? Sign up</a>
      </div>
    </div>
  </div>
);

SignIn.propTypes = {
  signIn: PropTypes.func,
  redirSignUp: PropTypes.func,
};

export default SignIn;
