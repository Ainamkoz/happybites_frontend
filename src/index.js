import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import AuthState from './components/auth/context/authContext';

import App from './App';


ReactDOM.render(
  <React.StrictMode>
      <Router>
        <AuthState>
        <App />
        </AuthState>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
