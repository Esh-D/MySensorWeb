import React, {useRef, useState} from 'react'
import "./signup.css"
import { Link } from 'react-router-dom'
import { useAuth } from "../../providers/AuthContext"
//import { Alert } from 'react-alert'
import { useNavigate } from "react-router-dom";
import { dummyDevices } from "../../constants/sensorsData"
import { db } from "../../firebase"

export default function Signup() {
  const { signup, login } = useAuth()

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passConfirm, setPassConfirm] = useState("");
  let navigate = useNavigate();

  const data = {
    name: name,
    email: email,
    firstEntryWine: true,
    firstEntrySensor: true,
    devices: dummyDevices,
  }

  const submit = async () => {
    if (password === passConfirm) {
      try {
        await signup(email, password)
        //await login(email, password)
        /* request not working for some reason (saying "Permission denied", but the user is signed in, so I should have access)
        I have tested the API, I know the code is correct since it works when the security rules for the Firestore Users collection are just "read, write true" instead of including the auth condition
        await fetch("http://localhost:4000/api/v1/users", {
          method: 'POST',
          body: JSON.stringify(data)
        })
        */
        db
        .collection('Users')
        .add({
          name: name,
          email: email,
          firstEntryWine: true,
          firstEntrySensor: true,
          devices: dummyDevices,
        })
        .then(() => {
          console.log('User added!');
        });
        
        navigate("/dashboard")
      } catch (e) {
        alert("Failed to create an account: " + e)
      }
    } else {
      alert("Passwords do not match!")
    }
  }

  return (
    <div className="signupContainer">
      <div className="signupCard">
        <div className="heading">
          <div className="logo">
            MySensorWeb
          </div>
          <div className="title">
            Sign Up
          </div>
        </div>
        <div className="fields">
          <input type="text" placeholder="Email" className="field" value={email} onChange={(e) => setEmail(e.target.value)}/>
          <input type="text" placeholder="Name" className="field" value={name} onChange={(e) => setName(e.target.value)}/>
          <input type="password" placeholder="Password" className="field" value={password} onChange={(e) => setPassword(e.target.value)}/>
          <input type="password" placeholder="Confirm Password" className="field" value={passConfirm} onChange={(e) => setPassConfirm(e.target.value)}/>
        </div>
        <div className="actionButton" onClick={submit}>
          CREATE ACCOUNT
        </div>
        <div className="loginMsg">
          Already have an account? <Link to='/login'>Log In</Link>
        </div>
        <div className="forgotMsg">
          <Link to="/password-reset">Forgot Password</Link>
        </div>
      </div>
    </div>
  )
}
