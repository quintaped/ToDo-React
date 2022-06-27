import React from 'react';

const List = (props) => {
  const list = [1,2,3,4,5];
 
  function numb(){
   return  Math.floor(Math.random() * 100);
  }
  return (
    <ul>
     {list.map((element, index) => {
      return (<li key={index}>{numb()}</li>);
     })}
    </ul>
  );
};

export default List;