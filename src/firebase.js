import firebase from "firebase/app";
import "firebase/database";

var firebaseConfig = {
  apiKey: "AIzaSyDZhcUh6m0QgnuDf3ndYoafujOcvbnXw1s",
  authDomain: "react-contact-65b33.firebaseapp.com",
  databaseURL: "https://react-contact-65b33-default-rtdb.firebaseio.com",
  projectId: "react-contact-65b33",
  storageBucket: "react-contact-65b33.appspot.com",
  messagingSenderId: "977221941445",
  appId: "1:977221941445:web:e532b4484c5e1f64d198ac"
  };
  // Initialize Firebase
  const fireDb = firebase.initializeApp(firebaseConfig);

  export default fireDb.database().ref();