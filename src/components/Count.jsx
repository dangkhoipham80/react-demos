import React, { useState } from 'react'
import IncrementCount from './IncrementCount';
import DecrementCount from './DecrementCount';
import ResetCount from './ResetCount';

const Count = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
        <h1>Count:</h1>
        <h2>{count}</h2>
        <ul>
            <li style={{marginBottom: '10px'}}><IncrementCount onClickHandler={() => { setCount(prevCount => prevCount + 1) }}/></li>
            <li style={{marginBottom: '10px'}}><DecrementCount onClickHandler={() => { setCount(prevCount => prevCount - 1) }}/></li>
            <li><ResetCount onClickHandler={() => { setCount(0) }}/></li>
        </ul>
    </div>
  )
}

export default Count