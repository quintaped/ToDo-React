import React from 'react';

const List = (props) => {
  const list = [1,2,3,4,5,6,7,8];
  return (
    <ul>
     {list.map((element, index) => {
      return (<li key={index}>{element}</li>);
     })}
    </ul>
  );
};

export default List;