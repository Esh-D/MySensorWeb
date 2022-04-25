import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../providers/AuthContext"
import Sidebar from '../../components/Sidebar/Sidebar';
import DataArea from '../../components/DataArea/DataArea';

import { dummyDevices } from '../../constants/sensorsData';

import './dashboard.css'

export default function Dashboard() {
  const { currentUser } = useAuth();
  const [currentDevice, setCurrentDevice] = useState(dummyDevices[0]);

  return (
    <>
      {currentUser ? (
        <div className="dashboardContainer">
          <Sidebar deviceData={dummyDevices} selectedDevice={currentDevice} setSelectedDevice={setCurrentDevice} />
          <DataArea devicesData={dummyDevices} selectedDevice={currentDevice}/>
        </div>
      ) : (
        <div>
          <Link to="/login">Log In</Link> to see Dashboard.
        </div>
      )}
    </>
  )
}


/*
<Sidebar devicesData={dummyDevices} selectedDevice={currentDevice} setSelectedDevice={setCurrentDevice}/>
          <DataArea devicesData={dummyDevices} selectedDevice={currentDevice}/>
*/
