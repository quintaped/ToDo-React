import './App.css';
import React, { useState } from 'react';
import MyHeader from './components/MyHeader';
import MyFooter from './components/MyFooter';
import Counter from './components/Counter';
import FlexWrapper from './components/FlexWrapper';
import Button from './components/Button';
import SettingsMenu from './components/SettingsMenu';


function App() {
  const [showSettings, setShowSettings] = useState(false);
  const onToggleMenu = () => setShowSettings(!showSettings);
  const [headerFontSize, setHeaderFontSize] = useState(14);
  const [footerFontSize, setFooterFontSize] = useState(14);
  return (
    <div className="App">

      <MyHeader logoSize={300}  fontSize={headerFontSize}>
        Double header
      </MyHeader>
      
      <FlexWrapper width={300}>
        <h1>Hello!</h1>
        <p>Hello, world</p>
      </FlexWrapper>

      <FlexWrapper>
        <Counter startCounter={10} />
        <Counter startCounter={100} />
      </FlexWrapper>
      <Button onClick={onToggleMenu} className="button">
        {showSettings ? 'Close Settings' : 'Open Settings'}
      </Button>
      {showSettings && 
        <SettingsMenu 
          footerFontSize={footerFontSize} 
          headerFontSize={headerFontSize} 
          onSetHeader={(val) => {
            console.log('onSetHeader', val);
            setHeaderFontSize(val)
          }} 
          onSetFooter={setFooterFontSize} 
        />
      }
      <MyFooter  fontSize={footerFontSize}>
        All rights reserved
      </MyFooter>
    </div>
  );
}

export default App;
