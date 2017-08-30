/* global document */
import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Provider } from 'react-redux';
import App from './App';
import Store from './store';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

injectTapEventPlugin();

const StoreInstance = Store();

ReactDOM.render(
  <Provider store={StoreInstance}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
