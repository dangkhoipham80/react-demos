import React from 'react';

const IncrementCount = ({ onClickHandler }) => {
  return (
    <button onClick={onClickHandler}>+</button>
  );
};

export default IncrementCount;
