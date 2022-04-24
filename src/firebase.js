import firebase from "firebase/compat/app"
import "firebase/compat/auth"
//directly using firestore in the meantime, since API calls aren't working properly (see "Signin" page code for details)
import "firebase/compat/firestore" 

const app = firebase.initializeApp({
  apiKey: "AIzaSyCEoApDP106fd3M7zkNWLmAopXiJEsYkGE",
  authDomain: "mysensor-db23b.firebaseapp.com",
  projectId: "mysensor-db23b",
  storageBucket: "mysensor-db23b.appspot.com",
  messagingSenderId: "394408075125",
  appId: "1:394408075125:web:294395e56ea179da247d3c",
  measurementId: "G-N24X5FHXSF"
})

export const auth = app.auth()
export const db = app.firestore();

export default app