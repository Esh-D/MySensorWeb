import React from 'react'
import { Link } from 'react-router-dom'
import "./landing.css"
import { useNavigate } from "react-router-dom";

export default function Landing() {
  let navigate = useNavigate();

  return (
    <div className="landingContainer">
      <div className="landingCard">
        <img className="landingLogoImage" src={require('../../mysensorlogo.png')} alt="MySensor logo"/>
        <div className="landingLogo">
          MySensorWeb
        </div>
        <div className="authButtons">
          <div className="authButton" onClick={() => navigate("/login")}>
            Log In
          </div>
          <div className="authButton" onClick={() => navigate("/signup")}>
            Sign Up
          </div>
        </div>
      </div>
      
    </div>
        
  )
}
