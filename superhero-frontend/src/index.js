import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Provider from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import characterReducer from './reducers/createStore';

const store = createStore(characterReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App store={store} />
  </Provider>,
  document.getElementById('root')
);