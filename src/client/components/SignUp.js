import React from 'react';
import Validation from 'react-validation';
import { Link } from 'react-router';

const SignUp = (props) => (
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
    <button className="submit-button" onClick={props.handleSubmit}>Submit</button>
    <Link to="/">already have an account ? <b>sign in</b></Link>
  </div>
);

SignUp.propTypes = {
  handleSubmit: React.PropTypes.func.isRequired,
};

export default SignUp;
