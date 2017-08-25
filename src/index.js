import React from 'react';
import ReactDOM from 'react-dom'
import App from './App';
import { Provider } from 'react-redux'
import Store from './store'
import injectTapEventPlugin from 'react-tap-event-plugin';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

injectTapEventPlugin();

const StoreInstance = Store();

ReactDOM.render(
  <Provider store={StoreInstance}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();

