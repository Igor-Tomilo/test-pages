import React from 'react';
import ReactDOM from 'react-dom';
import RegisterPage from './App';
import LogInPage from './App2'

ReactDOM.render(
  <React.StrictMode>
    <LogInPage />
    <RegisterPage />
  </React.StrictMode>,
  document.getElementById('root')
);