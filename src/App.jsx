import './App.css';
import React, { useState } from 'react';
import MyHeader from './components/MyHeader';
import MyFooter from './components/MyFooter';
import Counter from './components/Counter';
import FlexWrapper from './components/FlexWrapper';
import Button from './components/Button';



function App() {
  const [showSettings, setShowSettings] = useState(false);
  const onToggleMenu = () => setShowSettings(!showSettings);
  return (
    <div className="App">
      <Button onClick={onToggleMenu} className='btn'>
      {showSettings ? 'Close My Profile' : '  Open My Profile'}
      
      </Button>


      <FlexWrapper width={300}>
        <h1>Hello!</h1>
        <p>Hello, world</p>
      </FlexWrapper>

      <Counter startCounter={10} />
      <Counter startCounter={100} />
      
      <MyFooter  fontSize={12}>
        All rights reserved
      </MyFooter>
    </div>
  );
}

export default App;
