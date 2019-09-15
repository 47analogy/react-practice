import React, { useState } from 'react'

const ToggleSwitch = () => {
  const lightOn = {
    background: 'yellow'
  }

  const lightOff = {
    background: 'black',
    color: 'white'
  }

  const [lightSwitch, changeToggle] = useState(false)

  const toggle = () => {
    changeToggle(lightSwitch => !lightSwitch)
  }
  console.log(lightSwitch)
  return (
    <div>
      <button onClick={toggle}>switch lights</button>
      {lightSwitch ? (
        <div style={lightOn}>light is on</div>
      ) : (
        <div style={lightOff}>light is off</div>
      )}
    </div>
  )
}

export default ToggleSwitch
