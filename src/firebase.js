import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDClxcrsmHuwKWC9ukO6m0c5eZA8mU8HLw",
    authDomain: "snackapp-db910.firebaseapp.com",
    databaseURL: "https://snackapp-db910.firebaseio.com",
    projectId: "snackapp-db910",
    storageBucket: "",
    messagingSenderId: "467563590360",
    appId: "1:467563590360:web:a0c063a7d04d97b7"
  };
  
  firebase.initializeApp(config);
  export default firebase;
