import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux';
import {store} from './redux/store'
import {Elements} from '@stripe/react-stripe-js'
import {stripeElemt} from './utils/stripe'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Elements stripe = {stripeElemt} >
          <App />
        </Elements>
      </BrowserRouter>
    </Provider>

    
  </React.StrictMode>
);

