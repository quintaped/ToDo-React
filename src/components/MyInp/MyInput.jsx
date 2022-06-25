import React, { useState } from 'react';


const MyInput = (props) => {
  const { headerName = '' } = props;
  const [value, setHeaderName] = useState(headerName);
  const onSetHeaderName = (e) => setHeaderName(e.target.value);
  
  return (
      <div>
            
        <input onChange={onSetHeaderName}  headerName={value}  />
        {value}
      </div>
  );
};
//  

export default MyInput;