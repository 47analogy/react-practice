import React from 'react'
import './App.css'
import Counter from './Counter'
import RandomNumber from './RandomNumber'
import MultiCounter from './MultiCounter'
import ToggleSwitch from './ToggleSwitch'

function App () {
  return (
    <div className='App'>
      <Counter />
      <RandomNumber />
      <MultiCounter />
      <ToggleSwitch />
    </div>
  )
}

export default App
