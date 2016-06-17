import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.logIn = this.logIn.bind(this);
  }

  logIn() {
    console.log('loggin in! jk.');
  }

  render() {
    return (
      <div>
        <h1>Am I here?</h1>
        <button onClick={this.login}></button>
      </div>
    );
  }
}

export default App;
