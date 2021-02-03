import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Provider from 'react-redux';
import { createStore } from 'redux';
import characterReducer from './reducers/createStore';

const store = createStore(characterReducer);

ReactDOM.render(
  <Provider store={store}>
    <App store={store} />
  </Provider>,
  document.getElementById('root')
);