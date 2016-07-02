/* global $, Materialize */
import { SUBMIT_MODAL } from './ActionTypes';

const openModal = (type, data, state) => ({
  type,
  data,
  state,
});

const modalSubmission = (type, data) => ({
  type,
  data,
});

const submitSurvey = () =>
  dispatch => {
    console.log('aklsjdfas;fjad;lkfsadjlk');
    const newVerb = $('input[name="verbgroup"]:checked').val();
    const newKeyword = $('input[name="keywordgroup"]:checked').val();
    const newAction = $('input[name="actiongroup"]:checked').val();
    console.log('hihi', newVerb, newKeyword, newAction);
    if (newVerb && newKeyword && newAction) {
      dispatch(modalSubmission(SUBMIT_MODAL, {
        verb: newVerb,
        keyword: newKeyword,
        action: newAction,
      }));
      $('#survey').closeModal();
    } else {
      Materialize.toast('Please fill out the form.', 3000);
    }
  };

const executeModal = (type, data) =>
  dispatch => {
    const modal = type.split('_')[1].toLowerCase();
    $(`#${modal}`).openModal();
    dispatch(openModal(type, data, modal));
  };

export { executeModal, submitSurvey };
