import React from 'react';
import Validation from 'react-validation';

const SignIn = () => (
  <div id="signin">
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
      <button className="submit-button" onClick={this.handleSubmit}>Sign In</button>
    </Validation.Form>
  </div>
);

export default SignIn;
