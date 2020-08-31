import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const data = require('./Assets/games.json');

ReactDOM.render(
  <React.StrictMode>
    <App games={ data.games } />
  </React.StrictMode>,
  document.getElementById('root')
);
