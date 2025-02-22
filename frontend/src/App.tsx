import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="red-bar">
      <img src={`${process.env.PUBLIC_URL}/chickfilingo logo.png`} alt="ChickFilLingo Logo" className="logo" style={{ height: '70px' }} />
    </div>
  );
}

export default App;
