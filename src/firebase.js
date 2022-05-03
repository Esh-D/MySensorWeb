import firebase from "firebase/compat/app"
import "firebase/compat/auth"
//directly using firestore in the meantime, since API calls aren't working properly (see "Signin" page code for details)
import "firebase/compat/firestore" 

const app = firebase.initializeApp({
  //removed initialization info
})

export const auth = app.auth()
export const db = app.firestore();

export default app
