import React, {useState} from 'react'
import './sidebar.css'
import { useAuth } from '../../providers/AuthContext';
import { Navigate } from 'react-router-dom';

import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  let navigate = useNavigate();
  const {logout} = useAuth();
  const devices = ["Device 1", "Device 2"];
  const [currentDevice, setCurrentDevice] = useState(devices[0]);

  const deviceList = () => {
    return devices.map((name:string) => {
        return <li className='sbListItem'>{name}</li>
    })
  }

  return (
      <div className="sidebar">
          <div className="sbWrapper">
              <div className="sbLogo">
                MySensorWeb
              </div>
              <ul className="sbList">
                  {deviceList()}
                  <li className="sbListItem" onClick={() => {
                      logout()
                      navigate('/login')
                      alert("sucessfully logged out")
                      }}>
                      Log Out
                  </li>
              </ul>
          </div>
      </div>
  )
}
