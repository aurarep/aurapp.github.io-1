import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/js/all.min.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    
    <Auth0Provider domain='dev-ltwcygaah4tjdfts.us.auth0.com' clientId='UIuoSHdlEj8TJmvz6LkxKGW7hTwkNP6Q' authorizationParams={{
      redirect_uri: window.location.origin
    }}>
      <Router>
      <App />
      </Router>
    </Auth0Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
