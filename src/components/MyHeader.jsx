import React from 'react';
import logo from '../assets/logo.svg';
import FlexWrapper from './FlexWrapper';

const MyHeader = (props) => {
  const { children } = props; // props.children
  const { logoSize } = props; // props.logoSize
  return (
    <header>
      <FlexWrapper>
        <img width={logoSize} src={logo} />
        <p>
          {children}
        </p>
      </FlexWrapper>
    </header>
  );
};

export default MyHeader;