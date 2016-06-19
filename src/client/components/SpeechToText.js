import React, { PropTypes } from 'react';

const SpeechToText = (props) =>
  <div>
    <h1>Web Speech API</h1>
    <h2>Transcription</h2>
    <div id="transcription">{props.transcription}</div>

    <span>Results:</span>
    <label>
      <input type="radio" name="recognition-type" value="final" checked="checked" />
      Final only
    </label>
    <label>
      <input type="radio" name="recognition-type" value="interim" />
      Interim
    </label>

    <h3>Log</h3>
    <div id="log">{props.logs}</div>

    <div className="buttons-wrapper">
      <button id="button-play-ws" onClick={props.startListening} className="button-demo">
        Play demo
      </button>
      <button id="button-stop-ws" onClick={props.stopListening} className="button-demo">
        Stop demo
      </button>
      <button id="clear-all" onClick={props.clearLog} className="button-demo">Clear all</button>
    </div>

  </div>;

SpeechToText.propTypes = {
  startListening: PropTypes.func,
  stopListening: PropTypes.func,
  clearLog: PropTypes.func,
  transcription: PropTypes.string,
  logs: PropTypes.string,
};

export default SpeechToText;
