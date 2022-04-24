import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../providers/AuthContext"
import Sidebar from '../../components/Sidebar/Sidebar';
import DataArea from '../../components/DataArea/DataArea';

import './dashboard.css'

export default function Dashboard() {
  const { currentUser } = useAuth();

  return (
    <>
      {currentUser ? (
        <>
          <div className="dashboardContainer">
            <Sidebar />
            <DataArea />
          </div>
        </>
      ) : (
          <div>
            <Link to="/login">Log In</Link> to see Dashboard.
          </div>
      )}
    </>
  )
}

