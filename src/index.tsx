import React from 'react';
import ReactDOM from 'react-dom';
import 'core-js/stable';
import { Login } from './Login';
import { createMagic } from './utils/magic';

// const magic = await createMagic(); // need top level await

ReactDOM.render(
  <React.StrictMode>
    <Login />
  </React.StrictMode>,
  document.getElementById('root'),
);
