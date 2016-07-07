import { GET_WEATHER } from '../actions/ActionTypes';

const weatherState = (state = {
  state: {},
}, action) => {
  switch (action.type) {
    case GET_WEATHER:
      return Object.assign({}, state, {
        state: action.data,
      });
    default:
      return state;
  }
};

export { weatherState };
