import React from 'react';
import './App.css';
import Employee from './Employee';

function App() {
  return (
    <div>
      <div className="red-bar" style={{ height: '120px' }}>
        <img src={`${process.env.PUBLIC_URL}/chickfilingo raw bird.png`} alt="ChickFilLingo Logo" className="logo" style={{ height: '100px', paddingLeft: '10px' }} />
        <img src={`${process.env.PUBLIC_URL}/chickfilingo text.png`} alt="ChickFilLingo Logo" className="logo" style={{ height: '80px', paddingLeft: '20px' }} />
      </div>
      <div className="content">
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '10px 0', border: '5px solid black', borderRadius: '10px', marginTop: '50px' }}>
          <div style={{ flex: '2 1 0%' }}></div>
          <div style={{ flex: '2 1 0%', display: 'flex' }}>
            <div style={{ flex: '3 1 0%', border: 'none' }}>
              <img src={'/chickfilingo menu.png'} style={{ alignContent: 'center', height: '75vh', paddingLeft: '20px'}}/>
            </div>
            <div style={{ flex: '2.25 1 0%', border: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Employee />
            </div>
            <div style={{ flex: '2.25 1 0%', border: '1px solid black' }}>
              Order
            </div>
          </div>
          <div style={{ flex: '1 1 0%' }}></div>
        </div>
      </div>
    </div>
  );
}

export default App;
