import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Promise from 'redux-promise';
import { createStore, applyMiddleware } from 'redux';
import './index.css';
import App from './App';
import reducers from './reducers'


const createStoreWithMiddleware = applyMiddleware(Promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
  <App />
  </Provider>
  ,document.querySelector('.container')
);
