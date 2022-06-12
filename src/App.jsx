import './App.css';
import React , { useState }from 'react';
import MyHeader from './components/MyHeader';
import MyFooter from './components/MyFooter';
import Counter from './components/Counter';
import FlexWrapper from './components/FlexWrapper';


function App() {
  const [counter, setCounter] = useState(0); 
      const increment = () => {
      if (counter < 0){
        counter = 0;
     }else{
       setCounter(counter + 1);
     }
     }
      const reduction = () => {
        if (counter <= 0){
          counter = 0;
       }else{
        setCounter(counter - 1);}}
  
  return (
    <div className="App">
      <MyHeader logoSize={200} >
        This text is from App.jsx
        <h2>H2</h2>
      </MyHeader>

      <h1>Hello!</h1>
      <p>Hello, world</p>
      <MyHeader logoSize={300}>
        Double header
      </MyHeader>
      
      <FlexWrapper className="FlWr" width={300}>
        hhh
      </FlexWrapper>

      <div>
        <Counter onClick={increment}>+</Counter>
       {counter}
        <Counter onClick={reduction}>-</Counter>
      </div>
      
      <MyFooter>
        All rights reserved
      </MyFooter>
    </div>
  );
}

export default App;
