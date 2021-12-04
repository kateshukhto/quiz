import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import {BrowserRouter} from 'react-router-dom'
import ErrorBoundry from './components/ErrorMessage/ErrorBoundry';

ReactDOM.render(
  <>
    <ErrorBoundry>
      <BrowserRouter>
          <App/>
      </BrowserRouter>
    </ErrorBoundry>
  </>,
  document.getElementById('root')
);

