import React, { PropTypes } from 'react';
import ActionSurvey from './ActionSurvey';
import VerbSurvey from './VerbSurvey';
import KeywordSurvey from './KeywordSurvey';

const Survey = (props) =>
  <div id="survey" className="modal">
    <div className="modal-content">
      <h4>Sorry! Didn't understand what you said</h4>
      <p>Could you help me understand what you meant?</p>
      <form action="#">
        <div className="col s12">
          <span>You said: {props.transcription.text}</span>
        </div>
        <div className="col s12">
          <VerbSurvey transcription={props.transcription} />
          <KeywordSurvey transcription={props.transcription} />
          <ActionSurvey actions={props.actions} />
        </div>
      </form>
    </div>
    <div className="modal-footer">
      <a
        href="#!"
        onClick={props.learn}
        className="waves-effect waves-green btn-flat"
      >
        Send
      </a>
    </div>
  </div>;

Survey.propTypes = {
  learn: PropTypes.func,
  transcription: PropTypes.object,
  actions: PropTypes.array,
};

export default Survey;

