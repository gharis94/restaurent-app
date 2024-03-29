import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux';
import {store} from './redux/store'
import {Elements} from '@stripe/react-stripe-js'
import {stripeElemt} from './utils/stripe'
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

const persistedstore=persistStore(store) 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor = {persistedstore}>
        <BrowserRouter>
          <Elements stripe = {stripeElemt} >
            <App />
          </Elements>
        </BrowserRouter>
      </PersistGate>
    </Provider>    
  </React.StrictMode>
);

