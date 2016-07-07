import { combineReducers } from 'redux';
import { modalState, modalSubmit } from './Modal';
import { authState } from './Auth';
import { quoteState } from './Quotes';
import { geoState } from './GeoLocation';
import { todos } from './todos';
import {
  TOGGLE_RECORDING,
  ADD_TRANSCRIPTION,
  ADD_LABEL,
  REQUEST_ANALYSIS,
  RECEIVE_ANALYSIS,
  REQUEST_ACTION,
  RECEIVE_ACTION,
  REQUEST_NODE_LABEL,
  RECEIVE_NODE_LABEL,
  TOGGLE_ALL_LABELS,
} from '../actions/ActionTypes';

const isRecording = (state = false, action) => {
  switch (action.type) {
    case TOGGLE_RECORDING:
      return action.status;
    default:
      return state;
  }
};

const analysis = (state = {
  isAnalyzing: false,
  analysis: {},
}, action) => {
  switch (action.type) {
    case REQUEST_ANALYSIS:
      return Object.assign({}, state, {
        isAnalyzing: true,
      });
    case RECEIVE_ANALYSIS:
      return Object.assign({}, state, {
        isAnalyzing: false,
        analysis: action.analysis,
      });
    default:
      return state;
  }
};

const actions = (state = {
  isProcessing: false,
  result: {},
  data: {},
}, action) => {
  switch (action.type) {
    case REQUEST_ACTION:
      return Object.assign({}, state, {
        isProcessing: true,
      });
    case RECEIVE_ACTION:
      return Object.assign({}, state, {
        isProcessing: false,
        result: action.response,
        data: action.data,
      });
    default:
      return state;
  }
};

const history = (state = [], action) => {
  switch (action.type) {
    case ADD_TRANSCRIPTION:
      return [
        ...state,
        action.transcription,
      ];
    default:
      return state;
  }
};

const labelsStatus = (state = false, action) => {
  switch (action.type) {
    case TOGGLE_ALL_LABELS:
      return action.status;
    default:
      return state;
  }
};

const labelCreation = (state = {
  isFetching: false,
  data: {},
}, action) => {
  switch (action.type) {
    case REQUEST_NODE_LABEL:
      return Object.assign({}, state, {
        isFetching: true,
        data: action.data,
      });
    case RECEIVE_NODE_LABEL:
      return Object.assign({}, state, {
        isFetching: false,
        data: action.data,
        response: action.response,
      });
    default:
      return state;
  }
};

const labelSpheres = (state = [], action) => {
  switch (action.type) {
    case ADD_LABEL:
      return [
        ...state,
        {
          name: action.data.name,
          values: action.data.values,
        },
      ];
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  isRecording,
  history,
  labelSpheres,
  analysis,
  actions,
  labelCreation,
  labelsStatus,
  modalState,
  modalSubmit,
  authState,
  quoteState,
  geoState,
  todos,
});

export default rootReducer;
