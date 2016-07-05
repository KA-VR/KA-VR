/* eslint-disable no-console*/
import React, { Component } from 'react';
import serialize from 'form-serialize';
import SignUp from './SignUp';
import auth from './auth';

class SignUpContainer extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // componentWillMount() {
  //   if (window.localStorage.getItem('KAVR')) {
  //     browserHistory.push('/dashboard');
  //   }
  // }

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
      // Successful form validation, check if user already exists
      auth.signup(formData, (res) => {
        console.log('RESPONSE on SIGNUP FROM SERVER: ', res);
        if (res.response) {
          console.log('Error signing up');
        } else if (res.redirect === '/dashboard') {
          window.location = res.redirect;
        }
      });
    }
  }

  render() {
    return (
      <SignUp handleSubmit={this.handleSubmit} />
    );
  }
}

export default SignUpContainer;
