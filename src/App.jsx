import './App.css';
import React, { useState } from 'react';
import MyHeader from './components/MyHeader';
import MyFooter from './components/MyFooter';
import Columns from './components/Columns';
import Button from './components/Button';
// render function
function App() {
  // useState returns [value, setValue]
  const [counter, setCounter] = useState(0); // useState - react hook
  const increment = () => setCounter(counter + 1);
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
      <main className="Main">
        <Columns
          section1="Section 1"
          section2="Section 2"
        />
      </main>
      <div>
        <Button onClick={increment}>+</Button>
        {counter}
      </div>
     
      <MyFooter>
        All rights reserved
      </MyFooter>
    </div>
  );
}

export default App;
