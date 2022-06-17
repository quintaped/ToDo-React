import './App.css';
import React from 'react';
import MyHeader from './components/MyHeader';
import MyFooter from './components/MyFooter';
import Counter from './components/Counter';
import FlexWrapper from './components/FlexWrapper';
import Button from './components/Button';


function App() {
  return (
    <div className="App">

      <MyHeader logoSize={300}  fontSize={32}>
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
      <button className="button">TEST</button>
      
      <MyFooter  fontSize={12}>
        All rights reserved
      </MyFooter>
    </div>
  );
}

export default App;
