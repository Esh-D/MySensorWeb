import React, {useState} from 'react'
import Topbar from '../Topbar/Topbar'
import './dataArea.css'
import SensorCircle from '../SensorCircle/SensorCircle'
import SensorData from '../SensorData/SensorData'

export default function DataArea({devicesData, selectedDevice}) {
  //const [selectedSensor, setSelectedSensor] = useState(devicesData[selectedDevice.id - 1].sensors[0]) 

  const renderSensors = () => {
    return devicesData[selectedDevice.id - 1].sensors.map((sensor) => {
      return (
        <div className="daSensor">
          <SensorCircle devicesData={devicesData} selectedDevice={selectedDevice} thisSensor={sensor} //setSelectedSensor={setSelectedSensor}
          />
          <div className="daSensorData">
            <SensorData devicesData={devicesData} selectedDevice={selectedDevice} thisSensor={sensor} //selectedSensor={selectedSensor} 
            />
          </div>
        </div>
      )
    })
  }

  /*
  const renderSensorsData = () => {
    return devicesData[selectedDevice.id - 1].sensors.map((sensor) => {
      return (
        <div className="daSensorData">
          <SensorData devicesData={devicesData} selectedDevice={selectedDevice} thisSensor={sensor} //selectedSensor={selectedSensor} 
          />
        </div>
      )
    })
  }
  */

  return (
    <div className="dataArea">
        <div className="daWrapper">
            <Topbar devicesData={devicesData} selectedDevice={selectedDevice} />
            <div className="daSensors">
              {renderSensors()}
            </div>
            {/*<div className="daSensorsData">
              {renderSensorsData()}
            </div>*/}
        </div>
    </div>
  )
}

/*
            <SensorData devicesData={devicesData} selectedDevice={selectedDevice} selectedSensor={selectedSensor} />

*/