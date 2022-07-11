import React from 'react';


const Button = (props) => {

  const { children, onClick, type } = props;
 
  return (
    <button type={type} className='btn' onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;