import './App.css';
import React from 'react';
import MyHeader from './components/MyHeader';
import MyFooter from './components/MyFooter';
import Counter from './components/Counter';
import List from './components/List/List';
import FilteredList from './components/List/FilteredList';

function App() {
  return (
    <div className="App">
      <MyHeader logoSize ={200} />
    
       <List/>

       <FilteredList />

      <Counter startCounter={10} />
      <Counter startCounter={100} />
      
      <MyFooter  fontSize={12}>
        All rights reserved
      </MyFooter>
    </div>
  );
}

export default App;
