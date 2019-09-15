import React, { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)

  const countOne = () => {
    setCount(count => count + 1)
  }
  return (
    <div>
      <p>Button Count: {count}</p>
      <button onClick={countOne}>click count</button>
    </div>
  )
}

export default Counter
