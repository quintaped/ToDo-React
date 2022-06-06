import React from 'react';
import './App.css';
import MyHeader from './MyHeader';

function App() {
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
    </div>
  );
}

export default App;
