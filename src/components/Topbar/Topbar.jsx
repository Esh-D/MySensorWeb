import React from 'react'
import "./topbar.css"

export default function Topbar({devicesData, selectedDevice}) {
  return (
    <div className="topbar">
      <div className="tbWrapper">
        View your sensor data below for <div className="tbDevName">{selectedDevice.name}</div>
        </div>
    </div>
  )
}
