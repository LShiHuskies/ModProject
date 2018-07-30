import React from 'react';
import ReactDOM from 'react-dom';
import { ActionCableProvider } from 'react-actioncable-provider';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { API_WS_ROOT } from './constants';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';


const store = createStore(reducers)
console.log('store', store.getState())

ReactDOM.render(
  <ActionCableProvider url={API_WS_ROOT}>
  <Provider store={store}>
    <App />
  </Provider>
  </ActionCableProvider>, document.getElementById('root'));
    registerServiceWorker();
