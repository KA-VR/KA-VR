import React, { PropTypes } from 'react';
import Validation from 'react-validation';

const SignUp = ({ signUp, redirSignIn }) => (
  <div className="signup">
    <h1 className="center-align">Sign Up</h1>
    <div className="container">
      <div className="row">
        <Validation.Form id="signup" className="col offset-m3 m6 s12">
          <input
            type="text"
            name="firstname"
            placeholder="first name"
          />
          <input
            type="text"
            name="lastname"
            placeholder="last name"
          />
          <input
            type="password"
            name="password"
            placeholder="password"
          />
          <input
            type="password"
            name="passwordConfirm"
            placeholder="confirm password"
          />
          <Validation.Input
            name="email"
            placeholder="email"
            validations={[{ rule: 'isEmail' }]}
          />
          <button className="submit-button waves-effect waves-light btn" onClick={signUp}>
            Submit
          </button>
        </Validation.Form>
        <div className="col s12 offset-m3 m6 link">
          <a onClick={redirSignIn}>already have an account ? Sign in</a>
        </div>
      </div>
    </div>
  </div>
);

SignUp.propTypes = {
  signUp: PropTypes.func.isRequired,
  redirSignIn: PropTypes.func.isRequired,
};

export default SignUp;
