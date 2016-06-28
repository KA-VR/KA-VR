import React, { PropTypes } from 'react';

const SpeechToText = (props) =>
  <div className="container speechText">
    <div id="survey" className="modal">
      <div className="modal-content">
        <h4>Sorry! Didn't understand what you said</h4>
        <p>Could you help me understand what you meant?</p>

      </div>
      <div className="modal-footer">
        <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat">
          Send
        </a>
      </div>
    </div>
    <div id="displayInfo" className="modal">
      <div className="modal-content">
        <h4>Modal Header</h4>
        <p>A bunch of text</p>
      </div>
      <div className="modal-footer">
        <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat">
          Agree
        </a>
      </div>
    </div>
    <h1 className="center-align">KA-VR</h1>
    <div id="log" className="row">
      <div className="col s8 offset-s2 command-log" id="transcription">
        <h5>Log:</h5>
        {props.transcription}
      </div>
      <div className="activity-bar progress col s6 offset-s3">
        <div className={props.recordingState ? 'indeterminate' : 'determinate'}></div>
      </div>
      <div className="listen-buttons col s12">
        {props.recordingState ? (
          <div className="col s2 offset-s5">
            <button
              onClick={props.stopListening}
              id="stop"
              className="waves-effect waves-light btn"
            >
              Stop
            </button>
          </div>
        ) : (
          <div className="col s2 offset-s5">
            <button
              onClick={props.startListening}
              id="start"
              className="waves-effect waves-light btn right"
            >
              Start
            </button>
          </div>
        )}
      </div>
    </div>
  </div>;

SpeechToText.propTypes = {
  startListening: PropTypes.func,
  stopListening: PropTypes.func,
  clearLog: PropTypes.func,
  transcription: PropTypes.object,
  logs: PropTypes.string,
  recordingState: PropTypes.bool,
};

export default SpeechToText;
