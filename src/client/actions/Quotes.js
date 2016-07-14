/* global $, Materialize */
/* eslint-disable no-console, no-eval */
import { GET_QUOTE } from './ActionTypes';
import fetch from 'isomorphic-fetch';
import url from '../url.config';

const getQuoteAction = data => ({
  type: GET_QUOTE,
  data,
});

const getQuote = () =>
  dispatch => (
    fetch(`${url.api}/api/quote`, {
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
    .catch(err => console.log('Error on getQuote', err))
  );

export { getQuoteAction, getQuote };
