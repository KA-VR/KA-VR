import React, { Component } from 'react';
import serialize from 'form-serialize';
import SignUp from '../components/SignUp';
import { browserHistory } from 'react-router';

class SignUpContainer extends Component {
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
      browserHistory.push('/dashboard');
    }
  }

  render() {
    return (
      <SignUp handleSubmit={this.handleSubmit} />
    );
  }
}

export default SignUpContainer;
