import React, { PropTypes } from 'react';

const Speech = (props) => {
  const buttonType = props.isRecording ? 'stop' : 'start';
  return (
    <div className="row speechText">
      <h1 className="speech-title center-align">KA-VR</h1>
      <div className="activity-bar theme2-bg progress col s6 offset-s3">
        <div className={props.isRecording ? 'indeterminate' : 'determinate'}></div>
      </div>
      <div className="listen-buttons col s12">
        <div className="col s2 offset-s5">
          <button
            onClick={props.toggleRecording}
            id={buttonType}
            className="waves-effect theme2-bg waves-light btn"
          >
            {buttonType}
          </button>
        </div>
      </div>
    </div>
  );
};

Speech.propTypes = {
  toggleRecording: PropTypes.func.isRequired,
  isRecording: PropTypes.bool.isRequired,
};

export default Speech;
