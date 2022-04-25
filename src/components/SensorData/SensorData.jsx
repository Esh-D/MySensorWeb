import React from 'react'
import './sensorData.css'

export default function SensorData({devicesData, selectedDevice, thisSensor, //selectedSensor
}) {
  let lightningReadings;

  if (thisSensor.id === 5) {
    lightningReadings = devicesData[selectedDevice.id - 1].sensors[4].readings.readings;
  }

  return (
    <div className="sensorData">
        {thisSensor.id === 5 ? (
          <div className="sdWrapper" style={{borderColor: thisSensor.color, color: thisSensor.color}}>
            Lastest lightning strike-
            Location: {lightningReadings[lightningReadings.length - 1].location}
            Time: {lightningReadings[lightningReadings.length - 1].time}
            Date: {lightningReadings[lightningReadings.length - 1].date}
          </div>
        ) : (
          <div className="sdWrapper" style={{borderColor: thisSensor.color, color: thisSensor.color}}>
            <div className="sdData">
              Average: {devicesData[selectedDevice.id - 1].sensors[thisSensor.id - 1].details.average}
            </div> 
            <div className="sdData">
              High: {devicesData[selectedDevice.id - 1].sensors[thisSensor.id - 1].details.high.value} 
            </div>
            <div className="sdData">
              Low: {devicesData[selectedDevice.id - 1].sensors[thisSensor.id - 1].details.low.value} 
            </div>
          </div>
        )}
    </div>
  )
}
