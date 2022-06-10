import React from 'react';


const MyFooter = (props) => {
  const { children } = props;
  const currentDate = new Date();
  const year= currentDate.getFullYear();
  return (
    <footer>
      <p>
        {children} {year}
      </p>
    </footer>
  );
};

export default MyFooter;