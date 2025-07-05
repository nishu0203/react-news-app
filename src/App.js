// src/App.js
import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';
import './App.css';

function App() {
  const [category, setCategory] = useState("general");

  return (
    <div className="App">
      <Navbar setCategory={setCategory} />
      <News category={category} />
    </div>
  );
}

export default App;
