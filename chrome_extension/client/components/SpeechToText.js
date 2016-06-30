import React, { PropTypes } from 'react';
import Survey from './Survey';
import CalculationModal from './CalculationModal';

const SpeechToText = (props) =>
  <div className="container speechText">
    <Survey
      transcription={props.transcription}
      actions={props.actions}
      learn={props.learn}
    />
    <CalculationModal calculation={props.calculation} />
    <h1 className="speech-title center-align">KA-VR</h1>
    <div className="row">
      <div className="activity-bar theme2-bg progress col s6 offset-s3">
        <div className={props.recordingState ? 'indeterminate' : 'determinate'}></div>
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
  calculation: PropTypes.number,
};

export default SpeechToText;
