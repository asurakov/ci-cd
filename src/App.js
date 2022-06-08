import React from 'react';
import './App.css';
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import About from './pages/About'
import Counter from './pages/Counter'
import Navbar from './components/Navbar';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>

      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="*" element={<Navigate to="/about" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;



