// Import the functions you need from the SDKs you need
const firebase = require("firebase/compat/app");
require("firebase/compat/firestore");

//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  //firebase config info removed
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const Users = db.collection("Users");
module.exports = Users;
