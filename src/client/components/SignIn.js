import React, { Component } from 'react';
import Validation from 'react-validation';
import serialize from 'form-serialize';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    const form = document.querySelector('#signin');
    const formData = serialize(form, { hash: true });
    // check if the email supplied is valid
    if (formData.email === undefined) {
      console.log('email invalid');
    } else if (formData.password === undefined) {
      console.log('Please input password');
    } else {
      // Make ajax call
      console.log('SUCCESSFULY LOGGED IN');
    }
  }

  render() {
    return (
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
  }
}


export default SignIn;
