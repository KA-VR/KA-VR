import { GET_QUOTE } from '../actions/ActionTypes';

const quoteState = (state = {
  state: {
    quoteAuthor: '',
    quoteLink: '',
    quoteText: '',
    senderLink: '',
    senderName: '',
  },
}, action) => {
  switch (action.type) {
    case GET_QUOTE:
      return Object.assign({}, state, {
        state: action.data,
      });
    default:
      return state;
  }
};

export { quoteState };
