import React from 'react';
import ReactDOM from 'react-dom';
import './scss/App.scss';
import App from './App';
import medias from '@assets/categories.json';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import reducer from '@store/reducer';

const { categories } = medias;

const initialState = {
  myList: ['Hola'],
  categories
}

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(
    applyMiddleware( logger )  
  )
)

console.log(store.getState())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('container')
);