import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from 'firebase';
import 'firebase/firestore';

firebase.initializeApp({
    apiKey: "AIzaSyCX-sgAmbX5XvJcEG00LHY6-dvVYsoqr-Q",
    authDomain: "evernote-eff55.firebaseapp.com",
    databaseURL: "https://evernote-eff55.firebaseio.com",
    projectId: "evernote-eff55",
    storageBucket: "evernote-eff55.appspot.com",
    messagingSenderId: "439062600787",
    appId: "1:439062600787:web:d3ba7ef5f635b497"
});

ReactDOM.render(<App />, document.getElementById('Evernote-contaier'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
