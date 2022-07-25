import './App.css';
import React from 'react';
import MyHeader from './components/MyHeader';
import MyFooter from './components/MyFooter';
import Counter from './components/Counter';
import List from './components/List/List';
import GuestList from './components/GuestList/GuestList';
import UserProvider from './context/UserNameContext';
import Weather from './components/Weather/Weather';

function App() {
  return (
    <div className="App">
      <UserProvider>
        <MyHeader logoSize ={200} />
        
        <List/>

        <Counter startCounter={10} />
        <Counter startCounter={100} />
        <GuestList/>
        <Weather />
        <MyFooter  fontSize={14}>
          All rights reserved
        </MyFooter>
      </UserProvider>
    </div>
  );
}

export default App;
