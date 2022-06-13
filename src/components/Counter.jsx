import React, { useState } from 'react';
import FlexWrapper from './FlexWrapper';
import classes from './Counter.module.css';

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
    <FlexWrapper width={100}>
      <button className={classes.button} onClick={reduction}>-</button>
      {counter}
      <button className={classes.button} onClick={increment}>+</button>
    </FlexWrapper>
  );
};

export default Counter;