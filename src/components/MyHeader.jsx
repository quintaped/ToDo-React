import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.svg';
import FlexWrapper from './FlexWrapper';
import Button from './Button';
import MyInput from './MyInp/MyInput';
import styles from './MyHeader.module.css';

const MyHeader = (props) => {
  const { fontSize} = props; // props.children
  const { logoSize } = props; // props.logoSize
  const styles={ fontSize:  fontSize};
  const [showSettings, setShowSettings] = useState(false);
  const onToggleMenu = () => setShowSettings(!showSettings);
  const [headerName, setHeaderName]= useState ('');
  useEffect(() => {
    const localHeaderName = localStorage.getItem('headerName') || 'Anonymous';
    setHeaderName(localHeaderName);
  }, []); // call function only one time at start app
  // order make sense
  useEffect(() => {
    localStorage.setItem('headerName', headerName);
  }, [headerName]);
  return (
    <header className="header">
      <FlexWrapper>
        <img width={logoSize} src={logo} />
        <p style={styles}>
          <Button onClick={onToggleMenu} className={styles.btn}>
            {showSettings ? 'Close My Profile' : '  Open My Profile'}
          </Button>
          Hello,{headerName}!
          {showSettings &&  <MyInput onSetHeaderName={setHeaderName} headerName={headerName}/>}
        </p>
      </FlexWrapper>
    </header>
  );
};

export default MyHeader;