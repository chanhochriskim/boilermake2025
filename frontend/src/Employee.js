import React, { useState } from 'react';
import './Employee.css';

function Employee() {
  const [state, setState] = useState('idle');

  return (
    <div className="employee-container">
      <div className={`employee ${state}`}></div>
      <div className="employee-buttons">
        <button onClick={() => setState('idle')}>Idle</button>
        <button onClick={() => setState('talking')}>Talking</button>
        <button onClick={() => setState('listening')}>Listening</button>
      </div>
    </div>
  );
}

export default Employee;