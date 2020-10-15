import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyCaB-Id_4H0owZf2dul2jOAnOx7K2Uein4",
    authDomain: "twitter-clone-db-15085.firebaseapp.com",
    databaseURL: "https://twitter-clone-db-15085.firebaseio.com",
    projectId: "twitter-clone-db-15085",
    storageBucket: "twitter-clone-db-15085.appspot.com",
    messagingSenderId: "315697245805",
    appId: "1:315697245805:web:b08fdf6593fad3aa31d964",
    measurementId: "G-9RH9EG94DL"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;