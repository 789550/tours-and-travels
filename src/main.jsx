import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './reduxStore/store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter basename='/tours-and-travels'>
      <App />
    </BrowserRouter>
  </Provider>
  // </React.StrictMode>,
)
