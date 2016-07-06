import {
  OPEN_STANDARD_MODAL,
  OPEN_CALCULATION_MODAL,
  OPEN_SURVEY_MODAL,
  OPEN_SEARCH_MODAL,
  OPEN_IMAGE_MODAL,
  OPEN_VIDEO_MODAL,
  OPEN_NEWS_MODAL,
  OPEN_WEATHER_MODAL,
  OPEN_MAPS_MODAL,
  OPEN_HELP_MODAL,
  OPEN_YELP_MODAL,
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
  map: '',
  calculation: '',
  weather: '',
  help: {
    webSearch: 'search - Lets you search the web - ex. "search for dogs"',
    imageSearch: 'search image - Lets you search for images - ex. "search image of dogs"',
    newsSearch: 'search news - Lets you search for news articles - ex. "search news of dogs"',
    webOpen: 'open - Lets you go directly to a web site/application - ex. "open Facebook"',
    playVideo: 'play video - Lets you play videos on the web - ex. "play video of dogs"',
    calculate: 'calculate - Lets you make math calculations - ex. "calculate 5 + 5"',
    weatherSearch: `search weather - Lets you find weather of a city - 
      ex. "search weather of San Francisco"`,
    learning: `If you say something that KAVR is unsure about,
      a survey will show up that will allow it to learn from you!`,
    yelpSearch: `search Yelp - Lets you search Yelp for places - 
      ex: "search yelp for coffee shops in San Francisco"`,
  },
  yelpsearchresults: { shops: [] },
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
    case OPEN_NEWS_MODAL:
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
    case OPEN_WEATHER_MODAL:
      return Object.assign({}, state, {
        state: action.state,
        weather: action.data,
      });
    case OPEN_HELP_MODAL:
      return Object.assign({}, state, {
        state: action.state,
        help: action.data,
      });
    case OPEN_CALCULATION_MODAL:
      return Object.assign({}, state, {
        state: action.state,
        calculation: action.data,
      });
    case OPEN_MAPS_MODAL:
      return Object.assign({}, state, {
        state: action.state,
        map: action.data,
      });
    case OPEN_YELP_MODAL:
      return Object.assign({}, state, {
        state: action.state,
        yelpsearchresults: action.data,
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
