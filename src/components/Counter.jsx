import React, { useState } from 'react';
import FlexWrapper from './FlexWrapper';

const Counter = (props) => {
  const { startCounter } = props;
  const [counter, setCounter] = useState(startCounter);

  const increment = () => {
    if (counter < 0){
      setCounter(0);
    } else {
      setCounter(counter + 1);
    }
  }

  const reduction = () => {
    if (counter <= 0) return;
    setCounter(counter - 1);
  }

  return (
    <FlexWrapper width="300">
      <button onClick={reduction}>-</button>
      {counter}
      <button onClick={increment}>+</button>
    </FlexWrapper>
  );
};

export default Counter;