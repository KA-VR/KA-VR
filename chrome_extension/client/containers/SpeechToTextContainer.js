/* global $, Materialize */
/* eslint-disable no-console, no-eval */
import React, { Component } from 'react';
import SpeechToText from '../components/SpeechToText.js';

const KEY_SPACEBAR = 32;

class SpeechToTextContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recognizer: null,
      transcription: {},
      log: 'Recording: false',
      recording: false,
    };
    this.recording = false;
    this.startListening = this.startListening.bind(this);
    this.stopListening = this.stopListening.bind(this);
    this.clearLog = this.clearLog.bind(this);

    $(document).on('keydown', event => {
      switch (event.keyCode) {
        case KEY_SPACEBAR:
          if (this.recording) this.stopListening();
          else this.startListening();
          this.recording = !this.recording;
          this.setState({ recording: this.recording });
          break;
        default:
          break;
      }
    });
  }
  componentDidMount() {
    window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition || null;

    if (window.SpeechRecognition === null) {
      console.log('API not supported');
    } else {
      // Recogniser doesn't stop listening even if the user pauses
      this.state.recognizer = new window.SpeechRecognition();
      // Start recognising
      this.state.recognizer.onresult = (event) => {
        this.updateTranscription(event);
      };
      // Listen for errors
      this.state.recognizer.onerror = (event) => {
        console.log('NEW EVENT ERROR', event);
        this.setState({
          log: `Recognition error:  + ${event.message} + <br /> + ${this.state.log}`,
        });
      };
    }
  }
  updateTranscription(event) {
    for (let i = event.resultIndex; i < event.results.length; i++) {
      if (event.results[i].isFinal) {
        $.ajax({
          url: 'http://localhost:8000/api/analyze',
          method: 'POST',
          data: {
            text: event.results[i][0].transcript,
          },
          success: data => {
            console.log('REturned', data);
            if (data.error) {
              Materialize.toast('Sorry! Didn\'t understand that.', 3000);
            } else { this.callBrain(data); }
            this.setState({
              transcription: {
                text: event.results[i][0].transcript,
                verb: data.verb || 'None',
                object: data.object ? data.object.join(', ') : 'None',
              },
            });
          },
          error: err => {
            console.log('Error on Text Analyzer:', err);
          },
        });
      }
    }
  }
  callBrain(dataObj) {
    console.log('data going into brain', dataObj);
    $.ajax({
      url: 'http://localhost:7750/api/think',
      method: 'POST',
      data: dataObj,
      success: response => {
        console.log('Brains response!', response);
        if (response.found) {
          $('#survey').openModal();
        } else {
          const thing = response.context;
          const action = response.funct.code;
          /* eslint-disable-next-line no-eval */
          eval(action)(thing);
        }
      },
      error: err => {
        console.log('Error on Text Analyzer:', err);
      },
    });
  }
  startListening() {
    Materialize.toast('KA-VR is listening!', 3000);
    console.log('start listening was clicked', this);
    // Set if we need interim results
    this.state.recognizer.continuous = true;
    // this.state.recognizer.interimResults = true;
    console.log('start listening was clicked', this);
    try {
      this.state.recognizer.start();
      this.setState({
        recording: true,
        log: `Recording: ${this.state.recording}`,
      });
      console.log('Recognition started');
    } catch (ex) {
      this.setState({
        log: `"Recognition error: + ${ex.message}" + <br /> + "${this.state.log}"`,
      });
      console.log('Recognition error');
    }
  }
  stopListening() {
    Materialize.toast('KA-VR has stopped listening!', 3000);
    this.state.recognizer.stop();
    this.setState({
      recording: false,
      log: `Recording: ${this.state.recording}`,
    });
    console.log('Recognition stopped', this.state.transcription);
  }
  clearLog() {
    this.setState({
      transcription: '',
      log: '',
    });
  }
  render() {
    return (
      < SpeechToText
        logs={this.state.log}
        recordingState={this.state.recording}
        transcription={this.state.transcription}
        startListening={this.startListening}
        stopListening={this.stopListening}
        clearLog={this.clearLog}
      />
    );
  }
}

export default SpeechToTextContainer;
