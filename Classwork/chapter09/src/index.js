import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDry-WbW_mx_EJ7B1RyJ30cK0VP-DpGl-s",
  authDomain: "mycrudproject-5e851.firebaseapp.com",
  projectId: "mycrudproject-5e851",
  storageBucket: "mycrudproject-5e851.appspot.com",
  messagingSenderId: "677433324359",
  appId: "1:677433324359:web:74e79a4454da6dd1441262"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
