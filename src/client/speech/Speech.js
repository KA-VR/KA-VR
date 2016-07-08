import React, { PropTypes } from 'react';
import QuotesContainer from '../quotes/QuotesContainer';

const Speech = (props) => {
  const buttonType = props.isRecording ? 'stop' : 'start';
  return (
    <div className="speechText col s12 m6">
      <QuotesContainer />
      <div className="input-field col s6">
        <input id="command" type="text" className="validate" />
        <label htmlFor="command">Type in a Command</label>
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
