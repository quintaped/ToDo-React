import React from 'react';


const Button = (props) => {

  const { children, onClick, type } = props;
 
  return (
    <button className='btn' type={type} onClick={onClick} >{children}
      {/* {children} */}
    </button>
  );
};

export default Button;