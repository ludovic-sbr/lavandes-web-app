import React from 'react'
import ReactDOM from 'react-dom/client'
import ReactGA from "react-ga4";
import App from './app/App'
import './index.css'

import {store} from './app/redux/store';
import {Provider} from "react-redux";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root')!);

ReactGA.initialize("G-XJBFM94DLD");

root.render(
  <Provider store={store}>
    <App/>
  </Provider>,
);

const SendAnalytics = ()=> {
    ReactGA.send({
        hitType: "pageview",
        page: window.location.pathname,
    });
}

reportWebVitals(SendAnalytics);
