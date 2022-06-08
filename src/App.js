import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const [state, setState] = useState(0)

  const increment = () => setState(prev => prev + 1)
  const decrement = () => setState(prev => prev - 1)

  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React</h2>
      </div>
      <p className="App-intro">Welcome to counter</p>
      <hr />
      <h2>value = {state}</h2>
      <button className='myBtn' onClick={increment}>Increment</button>
      <button className='myBtn' onClick={decrement}>Decrement</button>
    </div>
  );
};

export default App;



