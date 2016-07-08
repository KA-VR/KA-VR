import React, { PropTypes } from 'react';

const Speech = (props) => {
  const buttonType = props.isRecording ? 'stop' : 'start';
  return (
    <div className="speechText col s12 m6">
      <h1 className="speech-title center-align">KA-VR</h1>
      <div className="input-field col s6">
        <input placeholder="Command" id="command" type="text" className="validate" />
        <label htmlFor="command">Command</label>
      </div>
      <div className="listen-buttons col s12">
        <div className="col s2 offset-s5">
        </div>
      </div>
      <button
        onClick={props.toggleRecording}
        id={buttonType}
        className="waves-effect waves-light btn"
      >
        {buttonType}
      </button>
    </div>
  );
};

Speech.propTypes = {
  toggleRecording: PropTypes.func.isRequired,
  isRecording: PropTypes.bool.isRequired,
};

export default Speech;
