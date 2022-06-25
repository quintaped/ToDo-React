import React, { useState } from 'react';
import FlexWrapper from './FlexWrapper';
import MyHeader from './MyHeader';


const Button = (props) => {

    const { children, onClick} = props;
 
  return (
    <div>
      
    <MyHeader logoSize={300}  fontSize={32}>
       <button className='btn' onClick={onClick} >{children}
     
       </button>
      <div ></div>
       
    
      </MyHeader>

   
    </div>
  );
};

export default Button;