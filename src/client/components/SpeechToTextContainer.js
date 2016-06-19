import React, { Component } from 'react';
import SpeechToText from './SpeechToText.js';

class SpeechToTextContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recognizer: null,
      transcription: '',
      log: '',
    };
    this.startListening = this.startListening.bind(this);
    this.stopListening = this.stopListening.bind(this);
    this.clearLog = this.clearLog.bind(this);
  }
  componentDidMount() {
    window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition || null;

    if (window.SpeechRecognition === null) {
      console.log('API not supported');
    } else {
      // Recogniser doesn't stop listening even if the user pauses
      this.state.recognizer = new window.SpeechRecognition();
      // this.state.recognizer.interimResults = true;
      // this.state.recognizer.start();
      // console.log('recognizer has started');
      // Start recognising
      this.state.recognizer.onresult = (event) => {
        // this.state.transcription = '';
        this.updateTranscription(event);
      };
      // Fires when recognizable speech is detected
      // this.state.recognizer.onspeechstart = (event) => {
      //   console.log('Speech detected', event);
      //   console.log(this.state.transcription);
      // };
      // Fires when recognizable speech is no longer detected
      // this.state.recognizer.onspeechend = (event) => {
      //   console.log('Speech has stopped', event);
      //   console.log(this.state.transcription);
      //   // this.state.transcription = '';
      //   this.state.recognizer.stop();
      // };
      // Listen for errors
      this.state.recognizer.onerror = (event) => {
        this.setState({
          log: `Recognition error:  + ${event.message} + <br /> + ${this.state.log}`,
        });
      };
    }
  }
  updateTranscription(event) {
    for (let i = event.resultIndex; i < event.results.length; i++) {
      if (event.results[i].isFinal) {
        this.setState({
          transcription: `${event.results[i][0].transcript} +
            (Confidence:  + ${event.results[i][0].confidence} + )`,
        });
      }
      // else {
      //   this.state.transcription += event.results[i][0].transcript;
      // }
    }
  }
  startListening() {
    console.log('start listening was clicked', this);
    // Set if we need interim results
    this.state.recognizer.continuous = true;
    // this.state.recognizer.interimResults = true;
    console.log('start listening was clicked', this);
    try {
      this.state.recognizer.start();
      this.setState({
        log: `Recognition started<br /> + ${this.state.log}`,
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
    this.state.recognizer.stop();
    this.setState({
      log: `Recognition stopped<br /> + ${this.state.log}`,
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
        transcription={this.state.transcription}
        startListening={this.startListening}
        stopListening={this.stopListening}
        clearLog={this.clearLog}
      />
    );
  }
}

export default SpeechToTextContainer;
