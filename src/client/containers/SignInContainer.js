import React, { Component } from 'react';
import serialize from 'form-serialize';
import SignIn from '../components/SignIn';
import { browserHistory } from 'react-router';

class SignInContainer extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.redirectSignUp = this.redirectSignUp.bind(this);
  }
  redirectSignUp() { browserHistory.push('/signup'); }

  handleSubmit(e) {
    e.preventDefault();
    const form = document.querySelector('#signin-form');
    const formData = serialize(form, { hash: true });
    // check if the email supplied is valid
    if (formData.email === undefined) {
      console.log('email invalid');
    } else if (formData.password === undefined) {
      console.log('Please input password');
    } else {
      // Make ajax call
      console.log('SUCCESSFULY LOGGED IN');
      browserHistory.push('/dashboard');
    }
  }

  render() {
    return (
      <SignIn handleSubmit={this.handleSubmit} redirectSignUp={this.redirectSignUp} />
    );
  }
}


export default SignInContainer;
