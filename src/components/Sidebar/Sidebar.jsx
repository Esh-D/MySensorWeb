import React, {useState} from 'react'
import './sidebar.css'
import { useAuth } from '../../providers/AuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRobot } from '@fortawesome/free-solid-svg-icons'
import { faSignOut } from '@fortawesome/free-solid-svg-icons'

import { useNavigate } from "react-router-dom";

import { dummyDevices } from '../../constants/sensorsData';

export default function Sidebar({deviceData, selectedDevice, setSelectedDevice}) {
  
  let navigate = useNavigate();
  const {logout} = useAuth();
  //const devices = ["Device 1", "Device 2"];

  const deviceList = () => {
    return deviceData.map((device) => {
        return (
          <div className="sbListItem" style={{backgroundColor: device === selectedDevice ? '#95A9B8': null}}>
            <FontAwesomeIcon icon={faRobot} />
            {device === selectedDevice ? 
              <li className='sbListItemText' >{device.name}</li>
            : <li className='sbListItemText' >{device.name}</li>}
          </div>
        )
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
                  <div className="sbListItem">
                    <FontAwesomeIcon icon={faSignOut} />
                    <li className='sbListItemText' onClick={() => {
                      logout()
                      navigate('/login')
                      alert("sucessfully logged out")
                      }}>
                      Log Out
                    </li>
                  </div>
              </ul>
          </div>
      </div>
  )
}
