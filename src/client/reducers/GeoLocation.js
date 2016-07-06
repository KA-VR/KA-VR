import { GET_GEO_LOCATION } from '../actions/ActionTypes';

const geoState = (state = {
  state: 'none',
  location: {},
}, action) => {
  switch (action.type) {
    case GET_GEO_LOCATION:
      return Object.assign({}, state, {
        state: action.state,
        location: action.data,
      });
    default:
      return state;
  }
};

export { geoState };
