import React, { useState } from 'react';


const MyInput = (props) => {
  const { headerName = '', onSetHeaderName } = props;
  const [value, setValue] = useState(headerName);
  const onChange = (e) => { 
    setValue(e.target.value); 
    onSetHeaderName(e.target.value);
  }
  
  return (
      <div>  
        <input onChange={onChange}  value={value}  />
        {value}
      </div>
  );
};
//  

export default MyInput;