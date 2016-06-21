import React from 'react';
import Validation from 'react-validation';

const SignUp = () => (
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
    <button className="submit-button" onClick={this.handleSubmit}>Submit</button>
    <span className="signup-link">already have an account ? <b>sign in</b></span>
  </div>
);

export default SignUp;
