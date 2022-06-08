import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const [state, setState] = useState(0)

  const increment = () => setState(prev => prev + 1)

  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React</h2>
      </div>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
      <hr/>
      <h2>value = {state}</h2>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default App;



