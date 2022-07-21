import React, { useState } from 'react';
import { useEffect } from 'react';
import logo from '../assets/logo.svg';
import FlexWrapper from './FlexWrapper';
import Button from './Button';
import MyInput from './MyInp/MyInput';
import '../App.css';

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
  }, []); 
  useEffect(() => {
    localStorage.setItem('headerName', headerName);
  }, [headerName]);

  return (
    <header className="header">
      <FlexWrapper width="1000">
        <img width={logoSize} src={logo} />
        <p style={styles}>
       <FlexWrapper width="500"> <form
            onSubmit={(e) => {
                e.preventDefault();
                onToggleMenu();

            }}
            >
          <Button type="submit"  className='btn'>
            {showSettings ? 'Close My Profile' : '  Open My Profile'}
          </Button>
          Hello,{headerName}!
          {showSettings &&  <MyInput onSetHeaderName={setHeaderName} headerName={headerName}/>}
        </form>
        </FlexWrapper>
        </p>
      </FlexWrapper>
    </header>
  );
};

export default MyHeader;