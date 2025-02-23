import React, { useRef } from 'react';
import './App.css';
import Employee from './Employee';
import OrderDisplay from './OrderDisplay';

function App() {
  const orderText = `  - Chicken Sandwich
    \t- No pickles
    \t- Extra sauce
  - Waffle Fries
    \t- Large
  - Drink
    \t- Sweet Tea
  - Drink
    \t- Sweet Tea
  - Drink
    \t- Sweet Tea
  - Drink
    \t- Sweet Tea
  - Drink
    \t- Sweet Tea`;

  const orderDisplayRef = useRef(null);

  interface OrderDisplayRef {
    updateOrderText: (newOrderText: string) => void;
  }

  const updateOrder = (newOrderText: string) => {
    if (orderDisplayRef.current) {
      (orderDisplayRef.current as OrderDisplayRef).updateOrderText(newOrderText);
    }
  };

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
              <img src={'/chickfilingo menu.png'} alt="Menu" style={{ alignContent: 'center', height: '75vh', paddingLeft: '20px'}}/>
            </div>
            <div style={{ flex: '2.25 1 0%', border: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Employee />
            </div>
            <div style={{ flex: '2.25 1 0%', border: 'none' }}>
              <img src={'/your order text.png'} alt="Your Order Text" style={{ width: '250px', paddingLeft: '20px', paddingTop: '0px'}}/>
              <OrderDisplay orderText={orderText} />
            </div>
          </div>
          <div style={{ flex: '1 1 0%' }}></div>
        </div>
      </div>
    </div>
  );
}

export default App;
