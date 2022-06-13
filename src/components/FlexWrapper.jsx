import React from 'react';

const FlexWrapper = (props) => {
    const { children, width } = props;
    return (
        <div width={width} className="FlWr">
            {children}
        </div>
    );
  };
  
  export default FlexWrapper;