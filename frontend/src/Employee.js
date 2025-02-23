import React, { useState, forwardRef, useImperativeHandle } from 'react';
import './Employee.css';

const Employee = forwardRef((props, ref) => {
  const [state, setState] = useState('idle');

  useImperativeHandle(ref, () => ({
    startListening() {
      setState('listening');
    },
    stopListening() {
      setState('idle');
    }
  }));

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
});

export default Employee;