import React from 'react';
import logo from './logo.svg';
import './App.css';
import answers from './answers';
import EightBall from './EightBall'

function App() {
  return (
    <EightBall answers={answers} />
  );
}

export default App;
