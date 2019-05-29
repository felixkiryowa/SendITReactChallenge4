import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import Notifications from 'react-notify-toast';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import store from './store';
import App from './components/App';


ReactDOM.render(
  <Provider store={store}>
    <ToastContainer />
    <App />
  </Provider>,
  document.getElementById('app'),
);
