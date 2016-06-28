import React from 'react';

const Chatbox = (props) => (
  <div className="chatbox">
    <input placeholder="Enter commands here" />
    <button onClick={props.submit}>Submit</button>
  </div>
);

Chatbox.propTypes = {
  submit: React.PropTypes.func.isRequired,
};

export default Chatbox;
