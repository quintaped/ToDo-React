import React, { useState } from 'react';
import FlexWrapper from './FlexWrapper';
import classes from './Counter.module.css';

const Counter = (props) => {
  const { startCounter, onChange = () => {} } = props;
  const [counter, setCounter] = useState(startCounter);

  const increment = () => {
    if (counter < 0){
      setCounter(0);
      onChange(counter);
    } else {
      setCounter(counter + 1);
      onChange(counter);
    }
  }

  const reduction = () => {
    if (counter <= 0) return;
    setCounter(counter - 1);
    onChange(counter);
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