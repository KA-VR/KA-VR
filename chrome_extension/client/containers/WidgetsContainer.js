import React, { Component } from 'react';
import Widget from '../components/Widget';

class WidgetsContainer extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange() {

  }
  render() {
    return (
      <Widget change={this.handleChange} />
    );
  }
}

export default WidgetsContainer;
