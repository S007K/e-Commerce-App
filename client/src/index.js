import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Components/App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';

import Store from "./Store/Store"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={Store}>
    <App />

    </Provider>
    
  </React.StrictMode>
);


reportWebVitals();
