import './App.css';
import React from 'react';
import MyHeader from './components/MyHeader';
import MyFooter from './components/MyFooter';
import Counter from './components/Counter';
import FlexWrapper from './components/FlexWrapper';


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
      <MyHeader logoSize={300}>
        Double header
      </MyHeader>
      
      <FlexWrapper width={300}>
        <h1>Hello!</h1>
        <p>Hello, world</p>
      </FlexWrapper>

      <Counter startCounter={10} />
      <Counter startCounter={100} />
      
      <MyFooter>
        All rights reserved
      </MyFooter>
    </div>
  );
}

export default App;
