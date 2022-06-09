import React from 'react';
import logo from './logo.svg';

const MyHeader = (props) => {
  const { children } = props; // props.children
  const { logoSize } = props; // props.logoSize
  return (
    <header>
      <img width={logoSize} src={logo} />
      <p>
        {children}
      </p>
    </header>
  );
};

export default MyHeader;