import React from 'react';
import '../App.css';
import { useUserName } from '../context/UserNameContext';


const MyFooter = (props) => {
  const { children,  fontSize } = props;
  const currentDate = new Date();
  const year= currentDate.getFullYear();
  const styles={ fontSize:  fontSize};
  const { userName } = useUserName();
  return (
    <footer className="footer">
      <p   style={styles}>
        {children} {year}
      </p>
      <p>
        Powered by {userName}
      </p>
    </footer>
  );
};

export default MyFooter;