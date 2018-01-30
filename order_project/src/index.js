import React from 'react';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import thunkMiddleware from 'redux-thunk';

import App from './components/App';
import reducers from './reducers'

const middlewares = [thunkMiddleware];
const store = createStore(reducers, compose(applyMiddleware(...middlewares)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
