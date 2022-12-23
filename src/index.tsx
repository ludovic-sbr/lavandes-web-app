import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App'
import './index.css'

import {store} from './app/redux/store';
import {Provider} from "react-redux";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <Provider store={store}>
    <App/>
  </Provider>,
);

reportWebVitals();
