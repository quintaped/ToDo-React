import './App.css';
import React, { useState } from 'react';
import MyHeader from './components/MyHeader';
import MyFooter from './components/MyFooter';
import Counter from './components/Counter';
import FlexWrapper from './components/FlexWrapper';
import Button from './components/Button';
import MyInput from './components/MyInp/MyInput';
import List from './components/List/List'



function App() {
  const [showSettings, setShowSettings] = useState(false);
  const onToggleMenu = () => setShowSettings(!showSettings);
  const [headerName,setHeaderName]= useState ('Anonymous')
  return (
    <div className="App">


      <Button onClick={onToggleMenu} className='btn'>
      {showSettings ? 'Close My Profile' : '  Open My Profile'}
      
      </Button>
      <MyHeader logoSize ={200}>    
        Hello,{headerName}!
         <MyInput onSetHeaderName={setHeaderName} headerName={headerName}/>
      </MyHeader>
    
       <List/>

      <Counter startCounter={10} />
      <Counter startCounter={100} />
      
      <MyFooter  fontSize={12}>
        All rights reserved
      </MyFooter>
    </div>
  );
}

export default App;
