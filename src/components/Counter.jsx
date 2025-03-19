import React from 'react'
import { useState } from 'react'

const Counter = () => {
    const [initializeValue, setInitializeValue] = useState(0);

    const increment = () => {
        setInitializeValue(prev => prev + 1);
    }
  return (
    <div>
        <h1>Counter</h1>
        <h2>Value: {initializeValue}</h2>
        <button onClick={increment}>+</button>
    </div>
  )
}

export default Counter