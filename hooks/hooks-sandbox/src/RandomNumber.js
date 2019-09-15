import React, { useState } from 'react'

const RandomColor = () => {
  const [items, setItems] = useState([]) // state is array

  const addItem = () => {
    setItems([...items, { id: items.length, value: Math.random() + 47 }])
  }

  return (
    <div>
      <button onClick={addItem}>click random</button>
      <ul>
        {items.map(item => {
          return <li key={item.id}>{item.value}</li>
        })}
      </ul>
    </div>
  )
}

export default RandomColor
