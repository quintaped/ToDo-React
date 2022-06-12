import React from 'react';

const Counter = (props) => {
  const { children, onClick } = props;

  return (
    <button onClick={onClick}>{children}</button>
  );
};

export default Counter;