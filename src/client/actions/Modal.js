/* global $, Materialize */
import { SUBMIT_MODAL } from './ActionTypes';

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
    $.ajax({
      method: 'POST',
      url: 'http://localhost:7750/api/learn',
      data,
    });
    if (newVerb && newKeyword && newAction) {
      dispatch(modalSubmission(SUBMIT_MODAL, data));
      $('#survey').closeModal();
    } else {
      Materialize.toast('Please fill out the form.', 3000);
    }
  };

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

export { executeModal, submitSurvey };
