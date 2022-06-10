import React from 'react';

const Columns = (props) => {
  const { section1, section2 } = props;
  return (
    // React.Fragment -> <>...</>
    <>
      <div>{section1}</div>
      <div>{section2}</div>
    </>
  );
};

export default Columns;