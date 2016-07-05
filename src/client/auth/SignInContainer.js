/* eslint-disable no-console*/
// import React, { Component } from 'react';
// import serialize from 'form-serialize';
// import SignUp from './SignUp';
// import auth from './auth';

// Incorporating Redux
import { connect } from 'react-redux';
import SignIn from './SignIn';
import { submitSignin } from '../actions/Auth';

const mapStateToProps = (state) => {
  const { authState } = state;
  return {
    authState,
  };
};

const mapDispatchToProps = dispatch => ({
  dispatch,
  signIn: e => {
    e.preventDefault();
    return dispatch(submitSignin());
  },
  redirectSignUp: e => {
    e.preventDefault();
    console.log('clicked');
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);

// class SignInContainer extends Component {
//   constructor(props) {
//     super(props);
//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.redirectSignUp = this.redirectSignUp.bind(this);
//   }

//   redirectSignUp() {
//     console.log('clicked');
//     return (
//       <div>
//         <SignUp />
//       </div>
//     );
//   }

//   handleSubmit(e) {
//     e.preventDefault();
//     const form = document.querySelector('#signin-form');
//     const formData = serialize(form, { hash: true });
//     // check if the email supplied is valid
//     if (formData.email === undefined) {
//       console.error('email invalid');
//     } else if (formData.password === undefined) {
//       console.log('Please input password');
//     } else {
//       // Make ajax call
//       auth.signin(formData, (res) => {
//         // If our signin is successful
//         if (res.redirect === '/dashboard') {
//           window.location.reload();
//         }
//       });
//     }
//   }

//   render() {
//     return (
//       <SignIn
//         handleSubmit={this.handleSubmit}
//         redirectSignUp={this.redirectSignUp}
//       />
//     );
//   }
// }

// SignInContainer.propTypes = {
//   handleSubmit: PropTypes.func,
//   redirectSignUp: PropTypes.func,
// };


// export default SignInContainer;
