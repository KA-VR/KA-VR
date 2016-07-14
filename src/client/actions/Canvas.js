/* global $, Materialize */
/* eslint-disable no-console, no-eval */
import fetch from 'isomorphic-fetch';
import url from '../url.config';
import {
  REQUEST_NODE_LABEL,
  RECEIVE_NODE_LABEL,
  TOGGLE_ALL_LABELS,
  ADD_LABEL,
} from './ActionTypes';

// Action Creators
const requestNodeLabel = data => ({
  type: REQUEST_NODE_LABEL,
  data,
});

const receiveNodeLabel = (data, response) => ({
  type: RECEIVE_NODE_LABEL,
  data,
  response,
});

const toggleAllLabels = status => ({
  type: TOGGLE_ALL_LABELS,
  status,
});

const createNode = data => ({
  type: ADD_LABEL,
  data,
});

const addNodes = data => (
  dispatch => dispatch(createNode(data))
);

const toggleGetAllLabels = status => (
  dispatch => dispatch(toggleAllLabels(status))
);


const fetchNodes = type => (
  dispatch => {
    dispatch(requestNodeLabel(type));
    return fetch(`${url.brain}/api/nodes`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ type }),
    })
    .then(data => data.json())
    .then(data => {
      dispatch(receiveNodeLabel(type, data));
      dispatch(addNodes({ name: type, values: data }));
    })
    .catch(err => console.log('GET error:', err));
  }
);

export { fetchNodes, toggleGetAllLabels };
