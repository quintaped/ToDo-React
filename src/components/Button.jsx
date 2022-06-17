import React from 'react';
import classes from './Button.module.css';

const Button = (props) => {
  const { children, onClick, className } = props;
  return (
    <button className={className || classes.button} onClick={onClick}>{children}</button>
  );
};

export default Button;