import React from 'react';
import classes from './Counter.module.css';

const Button = (props) => {
  const { children, onClick } = props;
  return (
    <button className={classes.myButton} onClick={onClick}>{children}</button>
  );
};

export default Button;