import React from 'react';
import Validation from 'react-validation';
import { Link } from 'react-router';

const SignIn = (props) => (
  <div id="signin">
    <h1>Sign In Page</h1>
    <Validation.Form id="signup">
      <Validation.Input
        name="email"
        placeholder="email"
        validations={[{ rule: 'isEmail' }]}
      />
      <input
        type="password"
        name="password"
        placeholder="password"
      />
      <button className="submit-button" onClick={props.handleSubmit}>Sign In</button>
    </Validation.Form>
    <div>
      <Link to="signup">Not a user? Sign up</Link>
    </div>
    <div>
      <Link to="dashboard">To Dashboard</Link>
    </div>
  </div>
);

SignIn.propTypes = {
  handleSubmit: React.PropTypes.func.isRequired,
};

export default SignIn;
