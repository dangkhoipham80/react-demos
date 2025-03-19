import React from 'react';

const DecrementCount = ({ onClickHandler }) => {
  return (
    <button onClick={onClickHandler}>-</button>
  );
};

export default DecrementCount;
