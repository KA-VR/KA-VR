import React, { Component } from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';
// import Navigation from './Navigation';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <SignUp />
        <SignIn />
      </div>
    );
  }
}

export default App;
