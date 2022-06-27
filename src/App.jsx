import './App.css';
import React from 'react';
import MyHeader from './components/MyHeader';
import MyFooter from './components/MyFooter';
import Counter from './components/Counter';
import List from './components/List/List'

function App() {
  return (
    <div className="App">
      <MyHeader logoSize ={200} />
    
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
