/* global $, Materialize */
/* eslint-disable no-console, no-eval */
import { GET_GEO_LOCATION } from './ActionTypes';

const getGeoAction = data => ({
  type: GET_GEO_LOCATION,
  state: 'geo',
  data,
});

const getGeo = () =>
  dispatch => {
    navigator.geolocation.getCurrentPosition(position => {
      const coords = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      };
      console.log('DO IT');
      dispatch(getGeoAction(coords));
    });
  };

export { getGeo };
