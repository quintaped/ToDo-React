import React from 'react';
import FlexWrapper from './FlexWrapper';
import MyHeader from './MyHeader';


const Button = (props) => {
  const { children, onClick} = props;
  const inp = (e) => {
    const value = document.getElementById('name').value;
    // document.getElementById('str').innerHTML=;
 
    console.log(value);
    return document.getElementById('st').innerHTML += " Hello,"+value+"!";

  };

  return (
    <div>
      
    <MyHeader logoSize={300}  fontSize={32}>
       <button className='btn' onClick={onClick} >{children}
         <div >
        <input id='name' className='inp' onClick={inp} type="text"></input>
        </div>
        
       </button>
      <div id='st'></div>
   
    
      </MyHeader>

   
    </div>
  );
};

export default Button;