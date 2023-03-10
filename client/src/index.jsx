import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import{Provider} from 'react-redux';
import Store from './redux/store/index';

ReactDOM.render(
  <Provider store={Store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
