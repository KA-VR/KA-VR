import {
  OPEN_STANDARD_MODAL,
  OPEN_CALCULATION_MODAL,
  OPEN_SURVEY_MODAL,
  OPEN_SEARCH_MODAL,
  OPEN_IMAGE_MODAL,
  OPEN_VIDEO_MODAL,
  COMPLETE_OPEN_MODAL,
  SUBMIT_MODAL,
} from '../actions/ActionTypes';

const modalState = (state = {
  state: 'none',
  actions: [],
  text: '',
  search: [],
  images: [],
  video: '',
  calculation: '',
}, action) => {
  switch (action.type) {
    case OPEN_STANDARD_MODAL:
      return Object.assign({}, state, {
        state: action.state,
        data: action.data,
      });
    case OPEN_IMAGE_MODAL:
      return Object.assign({}, state, {
        state: action.state,
        images: action.data,
      });
    case OPEN_SEARCH_MODAL:
      return Object.assign({}, state, {
        state: action.state,
        search: action.data,
      });
    case OPEN_SURVEY_MODAL:
      return Object.assign({}, state, {
        state: action.state,
        actions: action.data.actions,
        text: action.data.text,
      });
    case OPEN_VIDEO_MODAL:
      return Object.assign({}, state, {
        state: action.state,
        video: action.data,
      });
    case OPEN_CALCULATION_MODAL:
      return Object.assign({}, state, {
        state: action.state,
        calculation: action.data,
      });
    case COMPLETE_OPEN_MODAL:
      return action.state;
    default:
      return state;
  }
};

const modalSubmit = (state = {
  data: {},
}, action) => {
  switch (action.type) {
    case SUBMIT_MODAL:
      return Object.assign({}, state, {
        data: action.data,
      });
    default:
      return state;
  }
};

export { modalState, modalSubmit };
