/* global $, Materialize */
/* eslint-disable no-console, no-eval */
import {
  SUBMIT_MODAL,
} from './ActionTypes';

// import {
//   receiveAction,
// } from './Speech';


// Action Creators
const openModal = (type, data, state) => ({
  type,
  data,
  state,
});

const modalSubmission = (type, data) => ({
  type,
  data,
});

const executeModal = (type, data) =>
  dispatch => {
    const modal = type.split('_')[1].toLowerCase();
    if (modal === 'video') {
      $(`#${modal}`).openModal({
        complete: () => $('iframe').attr('src', ''),
      });
    } else {
      $(`#${modal}`).openModal();
    }
    dispatch(openModal(type, data, modal));
  };

// Action Functions: invoked when a survey gets sent, which then calls the dispatch method
const submitSurvey = () =>
  (dispatch, getState) => {
    const newVerb = $('input[name="verbgroup"]:checked').val();
    const newKeyword = $('input[name="keywordgroup"]:checked').val();
    const newAction = $('input[name="actiongroup"]:checked').val();
    const textArr = getState().modalState.text.split(' ');
    const context = textArr.filter(word => word !== newVerb || word !== newAction);
    const data = {
      verb: newVerb,
      keyword: newKeyword,
      action: newAction,
      context,
    };
    if (newVerb && newKeyword && newAction) {
      dispatch(modalSubmission(SUBMIT_MODAL, data));
      $('#survey').closeModal();
    } else {
      Materialize.toast('Please fill out the form.', 3000);
    }
    $.ajax({
      method: 'POST',
      url: 'http://localhost:7750/api/learn',
      data,
      success: (response) => {
        // dispatch(receiveAction(data, response));
        // document.getElementById('english').play();
        console.log('Response is: ', response);
        // let thing;
        // if (response.contexts.length !== 0) {
        //   thing = response.contexts.join(' ');
        // } else {
        //   thing = response.keyword.name;
        // }
        // console.log(thing);
        // const action = response.code;
        // console.log('executing function:', action);
        // Calls function from brain here!
        // eval(action)($, thing, dispatch, executeModal);
        const u = new SpeechSynthesisUtterance('Okay, I will get it next time!');
        speechSynthesis.speak(u);
      },
    });
  };

export { executeModal, submitSurvey };
