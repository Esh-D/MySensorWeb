import React from 'react'
import './sensorCircle.css'
import { dummyDevices } from '../../constants/sensorsData';
import { faTemperatureHalf, faWind, faWeightHanging, faFireFlameCurved, faBolt} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function SensorCricle({devicesData, selectedDevice, thisSensor, //setSelectedSensor
}) {
  return (
    <div className="sensorCircle">
      <div className="scWrapper" style={{borderColor: thisSensor.color, color: thisSensor.color}} //onClick={setSelectedSensor(devicesData[selectedDevice.id - 1].sensors[thisSensor.id - 1])}
      >
        {thisSensor.name === "Temperature" && 
          <FontAwesomeIcon icon={faTemperatureHalf} />}
        {thisSensor.name === "Air Quality" && 
          <FontAwesomeIcon icon={faWind} />}
        {thisSensor.name === "Barometric Pressure" && 
          <FontAwesomeIcon icon={faWeightHanging} />}
        {thisSensor.name === "Humidity" && 
          <FontAwesomeIcon icon={faFireFlameCurved} />}
        {thisSensor.name === "Lightning" && 
          <FontAwesomeIcon icon={faBolt} />}
      </div>
    </div>
  )
}
