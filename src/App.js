import Thoccy from './components/Thoccy.js';
import Header from './components/Header'
import { useState, useEffect } from 'react';
import './App.css';
import _ from 'lodash';

function App() {
  return (
    <div className="App">
      <Header />
      <Thoccy />
    </div>
  );
}

export default App;
