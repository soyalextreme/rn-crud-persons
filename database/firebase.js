import firebase from "firebase";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyBgXStyAGK_cxrfB1TgQIEtiYf-CiMC4ow",
  authDomain: "user-crud-react-native.firebaseapp.com",
  projectId: "user-crud-react-native",
  storageBucket: "user-crud-react-native.appspot.com",
  messagingSenderId: "737262595635",
  appId: "1:737262595635:web:c3684512c2fd0a92483d46",
  measurementId: "G-9CBHP6MZYR",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default {
  firebase,
  db,
};
