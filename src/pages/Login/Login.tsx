import React, {useState} from 'react'
import "./login.css"
import { Link } from 'react-router-dom'
import { useAuth } from "../../providers/AuthContext"
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login } = useAuth()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  const submit = async () => {
    try {
      await login(email, password)
      navigate("/dashboard")
    } catch (e) {
      alert("Failed to log in to account: " + e)
    }
  }

  return (
    <div className="loginContainer">
      <div className="loginCard">
      <div className="heading">
          <div className="logo">
            MySensorWeb
          </div>
          <div className="title">
            Log In
          </div>
        </div>
        <div className="fields">
          <input type="text" placeholder='Email' className="field" value={email} onChange={(e) => setEmail(e.target.value)}/>
          <input type="password" placeholder='Password' className="field" value={password} onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <div className="actionButton" onClick={submit}>
          LOG IN
        </div>
        <div className="signupMsg">
          Don't have an account? <Link to='/signup'>Sign Up</Link>
        </div>
        <div className="forgotMsg">
          <Link to="/password-reset">Forgot Password</Link>
        </div>
      </div>
    </div>
  )
}
