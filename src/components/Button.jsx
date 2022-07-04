import React from 'react';


const Button = (props) => {

  const { children, onClick} = props;
 
  return (
    <button className='btn' onClick={onClick} >{children}
      {/* {children} */}
    </button>
  );
};

export default Button;