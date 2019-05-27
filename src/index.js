import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Notifications from 'react-notify-toast';
import store from './store';
import App from './components/App';


ReactDOM.render(
  <Provider store={store}>
    <Notifications />
    <App />
  </Provider>,
  document.getElementById('app'),
);
