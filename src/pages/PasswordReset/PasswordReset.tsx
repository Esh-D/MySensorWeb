import React, {useState} from 'react'
import "./passwordReset.css"
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../providers/AuthContext"

export default function Login() {
  const { resetPassword } = useAuth()
  const [email, setEmail] = useState("");

  const submit = async () => {
    try {
      await resetPassword(email)
      alert("Email sent!")
    } catch (e) {
      alert("Failed to log in to account: " + e)
    }
  }
  return (
    <div className="resetContainer">
      <div className="resetCard">
      <div className="heading">
          <div className="logo">
            MySensorWeb
          </div>
          <div className="title">
            Password Reset
          </div>
        </div>
        <div className="fields">
          <input type="text" placeholder='Email' className="field" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div className="actionButton" onClick={submit}>
          RESET PASSWORD
        </div>
        <div className="signupMsg">
          Don't have an account? <Link to='/signup'>Sign Up</Link>
        </div>
        <div className="loginMsg">
            <Link to='/login'>Back to Log In</Link>
        </div>
      </div>
    </div>
  )
}
