import React from 'react'

const ResetCount = ({ onClickHandler }) => {
  return (
    <div>
        <button onClick={onClickHandler}>Reset</button>
    </div>
  )
}

export default ResetCount