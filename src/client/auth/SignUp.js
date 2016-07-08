import React, { PropTypes } from 'react';
import Validation from 'react-validation';

const SignUp = ({ signUp, redirSignIn }) => (
  <div>
    <Validation.Form id="signup">
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
    </Validation.Form>
    <button className="submit-button waves-effect waves-light btn" onClick={signUp}>Submit</button>
    <a onClick={redirSignIn}>already have an account ? Sign in</a>
  </div>
);

SignUp.propTypes = {
  signUp: PropTypes.func.isRequired,
  redirSignIn: PropTypes.func.isRequired,
};

export default SignUp;
