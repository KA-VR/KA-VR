/* global $, Materialize */
/* eslint-disable no-console, no-eval */
import { GET_QUOTE } from './ActionTypes';
import fetch from 'isomorphic-fetch';

const getQuoteAction = data => ({
  type: GET_QUOTE,
  data,
});

const getQuote = quoteObj =>
  dispatch => {
    dispatch(getQuoteAction(quoteObj));
    return fetch('http://localhost:8080/api/quote', {
      method: 'POST',
    })
    .then(data => data.json())
    .then(data => {
      if (data.error) {
        console.log('quote error:', data.error);
      } else {
        dispatch(getQuoteAction(data));
      }
    })
    .catch(err => console.log('Error on getQuote', err));
  };

export { getQuoteAction, getQuote };
