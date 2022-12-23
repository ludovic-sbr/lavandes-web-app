import React from 'react';
import {RouterProvider} from 'react-router-dom'

import {ApplicationRouter} from "./router";

import 'react-toastify/dist/ReactToastify.css';

const App: React.FC = () => {
  return <RouterProvider router={ApplicationRouter}/>;
}

export default App;

