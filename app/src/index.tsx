import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { MaterializeCssContextProvider } from './contexts/MaterializeCssContext';
import { LoginContextProvider } from './contexts/LoginContext';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <LoginContextProvider>
        <MaterializeCssContextProvider>
          <App />
        </MaterializeCssContextProvider>
      </LoginContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);

serviceWorker.unregister();
