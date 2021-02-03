import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import characterReducer from './reducers/characterReducer';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Villain from './components/Villain'
import Superhero from './components/Superhero'

const store = createStore(characterReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route exact path="/">
        <App store={store} />
      </Route>
      <Route exact path="/superheroes">
        <Superhero />
      </Route>
      <Route exact path="/villains">
        <Villain />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);