/* global $, Materialize */
/* eslint-disable no-console, no-eval */
import url from '../url.config';
import {
  TOGGLE_RECORDING,
  ADD_TRANSCRIPTION,
  REQUEST_ANALYSIS,
  RECEIVE_ANALYSIS,
  REQUEST_ACTION,
  RECEIVE_ACTION,
} from './ActionTypes';
import { executeModal } from './Modal';
import fetch from 'isomorphic-fetch';

//  Action Creators
const setRecording = status => ({
  type: TOGGLE_RECORDING,
  status,
});

const addTranscription = transcription => ({
  type: ADD_TRANSCRIPTION,
  transcription,
});

const requestAnalysis = transcription => ({
  type: REQUEST_ANALYSIS,
  transcription,
});

const receiveAnalysis = (transcription, analysis) => ({
  type: RECEIVE_ANALYSIS,
  transcription,
  analysis,
  receivedAt: Date.now(),
});

const requestAction = data => ({
  type: REQUEST_ACTION,
  data,
});

const receiveAction = (data, response) => ({
  type: RECEIVE_ACTION,
  data,
  response,
});

const callBrain = dataObj =>
  (dispatch, getState) => {
    console.log('data going into brain', dataObj);
    dispatch(requestAction(dataObj));
    return fetch(`${url.brain}/api/think`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataObj),
    })
    .then(response => response.json())
    .then(response => {
      console.log('Brains response!', response);
      if (!response.found) {
        dispatch(executeModal('OPEN_SURVEY_MODAL', {
          actions: response.actions,
          text: dataObj.text,
          verb: dataObj.verb,
          keywords: dataObj.keywords,
          object: dataObj.object,
          synonyms: dataObj.synonyms,
        }));
        const u = new SpeechSynthesisUtterance('Didn\'t understand that. Can you clarify?');
        speechSynthesis.speak(u);
      } else {
        dispatch(receiveAction(dataObj, response));
        // document.getElementById('english').play();
        console.log('Contexts are: ', response.contexts);
        let thing;
        if (response.contexts.length !== 0) {
          thing = response.contexts.join(' ');
        } else {
          thing = response.keyword.name;
        }
        console.log(thing);
        const action = response.funct.code;
        console.log('executing function:', action);
        // Calls function from brain here!
        eval(action)($, thing, dispatch, executeModal, getState());
        // const u = new SpeechSynthesisUtterance('Okay!');
        // speechSynthesis.speak(u);
      }
    })
    .catch(err => console.log('Error on Text Analyzer:', err));
  };

const callTextAnalyzer = transcript =>
  dispatch => {
    dispatch(requestAnalysis(transcript));
    return fetch(`${url.text}/api/analyze`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text: transcript }),
    })
    .then(data => data.json())
    .then(data => {
      if (data.error) {
        // document.getElementById('moron').play();
        Materialize.toast('Sorry! Didn\'t understand that.', 3000);
        const u = new SpeechSynthesisUtterance('Sorry! Didn\'t understand that.');
        speechSynthesis.speak(u);
      } else {
        dispatch(receiveAnalysis(data.text, data));
        dispatch(callBrain(data));
        // const u = new SpeechSynthesisUtterance('Okay, understood.');
        // speechSynthesis.speak(u);
      }
    })
    .catch(err => console.log('Error on Text Analyzer', err));
  };

const toggleRecording = recognizer => (
  (dispatch, getState) => {
    const isRecording = getState().isRecording;

    if (isRecording) {
      recognizer.stop();
    } else {
      recognizer.start();
    }
    dispatch(setRecording(!isRecording));
  }
);

const updateHistory = transcription => (
  dispatch => dispatch(addTranscription(transcription))
);

export { toggleRecording, updateHistory, callTextAnalyzer };
