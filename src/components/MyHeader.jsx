import React from 'react';
import logo from '../assets/logo.svg';
import FlexWrapper from './FlexWrapper';
import '../App.css';

const MyHeader = (props) => {
  const { children ,fontSize} = props; // props.children
  const { logoSize } = props; // props.logoSize
  const styles={ fontSize:  fontSize};
  return (
    <header className="header">
      <FlexWrapper>
        <img width={logoSize} src={logo} />
        <p   style={styles}>
          {children}
        </p>
      </FlexWrapper>
    </header>
  );
};

export default MyHeader;