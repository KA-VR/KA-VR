import React, { PropTypes } from 'react';

const SpeechToText = (props) =>
  <div className="container">
    <h1 className="center-align">Web Speech API</h1>
    <h2 className="center-align">Transcription</h2>
    <div id="transcription">{props.transcription}</div>
    <div id="log" className="row">
      <div className="col s2"><span>Recording State:</span></div>
      <div className="col s1">
        <div className={`preloader-wrapper  ${(props.recordingState) ? 'active' : ''}`}>
          <div className="spinner-layer spinner-red-only">
            <div className="circle-clipper left">
              <div className="circle"></div>
            </div><div className="gap-patch">
              <div className="circle"></div>
            </div><div className="circle-clipper right">
              <div className="circle"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="progress col s6">
        <div className={props.recordingState ? 'indeterminate' : 'determinate'}></div>
      </div>
      <div className="listen-buttons col s12">
        <div className="col s3 offset-s2">
          <button onClick={props.startListening} className="waves-effect waves-light btn right">
            Start
          </button>
        </div>
        <div className="col s3 offset-s2">
          <button onClick={props.stopListening} className="waves-effect waves-light btn">
            Stop
          </button>
        </div>
      </div>
    </div>
  </div>;

SpeechToText.propTypes = {
  startListening: PropTypes.func,
  stopListening: PropTypes.func,
  clearLog: PropTypes.func,
  transcription: PropTypes.string,
  logs: PropTypes.string,
  recordingState: PropTypes.bool,
};

export default SpeechToText;
