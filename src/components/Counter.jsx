import React from 'react'
import { useState } from 'react'

const Counter = () => {
    const [initializeValue, setInitializeValue] = useState(0);

  return (
    <div>
        <h1>Counter</h1>
        <h2>You clicked {initializeValue} times.</h2>
        <button onClick={() => setInitializeValue(initializeValue + 1)}>Clicked</button>
    </div>
  )
}

export default Counter