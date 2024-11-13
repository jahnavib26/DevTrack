import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';  // Import BrowserRouter
import { Provider } from 'react-redux';
import store from './store';  // Import your Redux store

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <Provider store={store}>                {/* Wrap with Provider for Redux */}
    <BrowserRouter>                       {/* Wrap with BrowserRouter for routing */}
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
