import React from 'react';

const FlexWrapper = (props) => {
    const { children, width } = props;
    const styles = { width: width };
    return (
        <div style={styles} className="FlWr">
            {children}
        </div>
    );
  };
  
  export default FlexWrapper;