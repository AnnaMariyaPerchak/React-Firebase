import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase';

// import Firebase, {FirebaseContext} from './components/Firebase'

const firebaseConfig = {
  apiKey: "AIzaSyCPPVOTKyDKGeLiTfiyIbGZfhop0Tjky84",
    authDomain: "react-firebase-a85ab.firebaseapp.com",
    databaseURL: "https://react-firebase-a85ab-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "react-firebase-a85ab",
    storageBucket: "react-firebase-a85ab.appspot.com",
    messagingSenderId: "59919096391",
    appId: "1:59919096391:web:6cd8dfee9cb35028deaf62"
}

firebase.initializeApp(firebaseConfig)

ReactDOM.render(
  // <FirebaseContext.Provider value={new Firebase()}>
  //   <App />
  // </FirebaseContext.Provider>,
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
