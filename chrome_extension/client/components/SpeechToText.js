import React, { PropTypes } from 'react';

const SpeechToText = (props) =>
  <div className="container speechText">
    <div id="survey" className="modal">
      <div className="modal-content">
        <h4>Sorry! Didn't understand what you said</h4>
        <p>Could you help me understand what you meant?</p>
        <form action="#">
          <div className="col s12">
            <span>You said: {props.transcription.text}</span>
          </div>
          <div className="col s12">
            <div className="verb-find col s12">
              <h6>Choose a Verb:</h6>
              {props.transcription.text.split(' ').map((verb, index) => (
                <p key={verb}>
                  <input
                    className="with-gap"
                    name="verbgroup"
                    type="radio"
                    id={`verb${index}`}
                    value={verb}
                  />
                  <label htmlFor={`verb${index}`}>{verb}</label>
                </p>
              ))}
            </div>
            <div className="keyword-find col s12">
              <h6>Choose a Keyword:</h6>
              {props.transcription.text.split(' ').map((keyword, index) => (
                <p key={keyword}>
                  <input
                    className="with-gap"
                    name="keywordgroup"
                    type="radio"
                    id={`keyword${index}`}
                    value={keyword}
                  />
                  <label htmlFor={`keyword${index}`}>{keyword}</label>
                </p>
              ))}
            </div>
            <div className="action-find col s12">
              <h6>Choose an action:</h6>
              {props.actions.map((action, index) => (
                <p key={action}>
                  <input
                    className="with-gap"
                    name="actiongroup"
                    type="radio"
                    id={`action${index}`}
                    value={action}
                  />
                  <label htmlFor={`action${index}`}>{action}</label>
                </p>
              ))}
            </div>
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
        <div className="col s4">Text: {props.transcription.text}</div>
        <div className="col s4">Verb: {props.transcription.verb}</div>
        <div className="col s4">Object: {props.transcription.object}</div>
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
  learn: PropTypes.func,
  transcription: PropTypes.object,
  logs: PropTypes.string,
  recordingState: PropTypes.bool,
  actions: PropTypes.array,
};

export default SpeechToText;
