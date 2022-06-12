import React from 'react';

const FlexWrapper = (props) => {
    const { children } = props; 
    const { width } = props; 
    return (
        <>
        <div>{width}</div>
        <div>{children}</div>
        </>
    );
  };
  
  export default FlexWrapper;