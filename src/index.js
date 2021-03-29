import React from 'react';
import ReactDOM from 'react-dom';
import './scss/App.scss';
import App from './App';

console.log('Hola amigo mio');
const container = document.getElementById('container');

ReactDOM.render(<App />, container);