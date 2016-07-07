/* global $, Materialize */
/* eslint-disable no-console, no-eval */
import { GET_WEATHER } from './ActionTypes';
import fetch from 'isomorphic-fetch';

const getWeatherAction = data => ({
  type: GET_WEATHER,
  data,
});

const getWeather = (coords) =>
  dispatch => {
    fetch('http://localhost:8080/api/weather', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(coords),
    })
    .then(data => data.json())
    .then(data => {
      if (data.error) {
        console.log('get weather error:', data.error, coords);
      } else {
        dispatch(getWeatherAction(data));
      }
    })
    .catch(err => console.log('Error on getWeather', err, coords));
  };

export { getWeatherAction, getWeather };
