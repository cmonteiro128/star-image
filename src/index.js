import React from 'react';
import { render } from 'react-snapshot';
import App from './App';
import injectTapEventPlugin from 'react-tap-event-plugin';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

injectTapEventPlugin();

render(
  <App />,
  document.getElementById('root')
);
registerServiceWorker();

