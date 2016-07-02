/* global Materialize, $ */
/* eslint-disable no-console */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Speech from './Speech';
import {
  toggleRecording,
  updateHistory,
  callTextAnalyzer,
  updateSurvey,
} from '../actions';

class SpeechContainer extends Component {
  constructor(props) {
    super(props);
    this.toggleRecording = this.toggleRecording.bind(this);
    this.recognizer = null;
  }

  componentDidMount() {
    window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition || null;
    if (!window.SpeechRecognition) {
      Materialize.toast('Speech Recognition not supported', 3000);
    } else {
      this.recognizer = new window.SpeechRecognition();
      this.recognizer.continuous = true;
      this.recognizer.onresult = (event) => {
        this.updateTranscription(event);
      };
      // Listen for errors
      this.recognizer.onerror = (event) => {
        Materialize.toast(`Recognizer Error: ${event.message}`, 3000);
      };
    }
  }

  updateTranscription(event) {
    const { dispatch } = this.props;
    for (let i = event.resultIndex; i < event.results.length; i++) {
      if (event.results[i].isFinal) {
        console.log('Going to text analyze', event.results[i][0].transcript);
        dispatch(callTextAnalyzer(event.results[i][0].transcript));
        dispatch(updateHistory(event.results[i][0].transcript));
      }
    }
  }

  toggleRecording() {
    const { dispatch, setRecording } = this.props;
    const status = this.props.isRecording ? 'stopped' : 'started';
    Materialize.toast(`KAVR has ${status} Listening...`, 3000);
    dispatch(setRecording(this.recognizer));
  }

  render() {
    return (
      <Speech
        isRecording={this.props.isRecording}
        toggleRecording={this.toggleRecording}
      />
    );
  }
}

SpeechContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  setRecording: PropTypes.func.isRequired,
  callTextAnalyzer: PropTypes.func.isRequired,
  updateHistory: PropTypes.func.isRequired,
  isRecording: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  const { isRecording } = state;
  return {
    isRecording,
  };
};

const mapDispatchToProps = dispatch => ({
  dispatch,
  setRecording: recognizer => toggleRecording(recognizer),
  callTextAnalyzer: transcript => callTextAnalyzer(transcript),
  createSurvey: surveyInfo => updateSurvey(surveyInfo),
  updateHistory: transcription => updateHistory(transcription),
});

export default connect(mapStateToProps, mapDispatchToProps)(SpeechContainer);
