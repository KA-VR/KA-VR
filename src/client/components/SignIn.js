import React, { PropTypes } from 'react';

const SignIn = (props) => (
  <div className="signin">
    <h1 className="center-align">Sign In Page</h1>
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
          onClick={props.handleSubmit}
        >Sign In</button>
      </form>
      <div className="col s12 offset-m3 m6 link">
        <a onClick={props.redirectSignUp}>Not a user? Sign up</a>
      </div>
    </div>
  </div>
);

SignIn.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  redirectSignUp: PropTypes.func.isRequired,
};

export default SignIn;
