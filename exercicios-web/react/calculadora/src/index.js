import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Calculator from './main/Calculator';
import serviceWorker from './serviceWorker';

ReactDOM.render(
  <Calculator />,
  document.getElementById('root')
);
serviceWorker.register();
