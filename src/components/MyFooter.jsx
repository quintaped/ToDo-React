import React from 'react';
import '../App.css';


const MyFooter = (props) => {
  const { children,  fontSize } = props;
  const currentDate = new Date();
  const year= currentDate.getFullYear();
  const styles={ fontSize:  fontSize};
  return (
    <footer className="footer">
      <p   style={styles}>
        {children} {year}
      </p>
    </footer>
  );
};

export default MyFooter;