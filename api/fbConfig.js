// Import the functions you need from the SDKs you need
const firebase = require("firebase/compat/app");
require("firebase/compat/firestore");

//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEoApDP106fd3M7zkNWLmAopXiJEsYkGE",
  authDomain: "mysensor-db23b.firebaseapp.com",
  projectId: "mysensor-db23b",
  storageBucket: "mysensor-db23b.appspot.com",
  messagingSenderId: "394408075125",
  appId: "1:394408075125:web:294395e56ea179da247d3c",
  measurementId: "G-N24X5FHXSF"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const Users = db.collection("Users");
module.exports = Users;