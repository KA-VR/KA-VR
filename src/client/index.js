import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import AppContainer from './app/AppContainer';

const store = configureStore();

render(
  <Provider store={store}>
    <AppContainer />
  </Provider>
  , document.getElementById('app')
);
