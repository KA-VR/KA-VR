import React, { Component } from 'react';
import Validation from 'react-validation';
import serialize from 'form-serialize';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    const form = document.querySelector('#signup');
    const formData = serialize(form, { hash: true });
    // check if the email supplied is valid
    if (formData.email === undefined) {
      console.log('email invalid');
    } else if (formData.password === undefined) {
      // check if the passwords entered matches
      console.log('Please input password');
    } else if (formData.password !== formData.passwordConfirm) {
      console.log('PASSWORDS DO NOT MATCH');
    } else if (formData.firstname === undefined) {
      console.log('Please fill out first name');
    } else if (formData.lastname === undefined) {
      console.log('Please fill out last name');
    } else {
      // Make AJAX Call
      console.log('Success');
    }
  }

  render() {
    return (
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
  }
}

export default SignUp;
