import React, { PropTypes } from 'react';
import Survey from './Survey';

const SpeechToText = (props) =>
  <div className="container speechText">
    <Survey
      transcription={props.transcription}
      actions={props.actions}
      learn={props.learn}
    />

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
        <div className="col s4">Text: {props.transcription.text}</div>
        <div className="col s4">Verb: {props.transcription.verb}</div>
        <div className="col s4">Object: {props.transcription.object}</div>
      </div>
      <div className="activity-bar theme2-bg progress col s6 offset-s3">
        <div className={props.recordingState ? 'indeterminate theme3-bg' : 'determinate theme3-bg'}></div>
      </div>
      <div className="listen-buttons col s12">
        {props.recordingState ? (
          <div className="col s2 offset-s5">
            <button
              onClick={props.stopListening}
              id="stop"
              className="waves-effect theme2-bg waves-light btn"
            >
              Stop
            </button>
          </div>
        ) : (
          <div className="col s2 offset-s5">
            <button
              onClick={props.startListening}
              id="start"
              className="waves-effect waves-light theme1-bg btn right"
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
  learn: PropTypes.func,
  transcription: PropTypes.object,
  logs: PropTypes.string,
  recordingState: PropTypes.bool,
  actions: PropTypes.array,
};

export default SpeechToText;
