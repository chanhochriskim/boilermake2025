import React, { useState, useEffect, useImperativeHandle, forwardRef } from 'react';
import './App.css'; // Make sure to import the CSS file

interface OrderDisplayProps {
    orderText: string;
}

const OrderDisplay = forwardRef((props: OrderDisplayProps, ref) => {
    const [displayedText, setDisplayedText] = useState('');

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            if (index < props.orderText.length - 1) { // Remove the last 9 characters
                setDisplayedText((prev) => prev + props.orderText[index]);
                index++;
            } else {
                clearInterval(interval);
            }
        }, 50); // Adjust the speed of typing here
        return () => clearInterval(interval);
    }, [props.orderText]);

    useImperativeHandle(ref, () => ({
        updateOrderText(newText: string) {
            setDisplayedText('');
            let index = 0;
            const interval = setInterval(() => {
                if (index < newText.length - 1) { // Remove the last 9 characters
                    setDisplayedText((prev) => prev + newText[index]);
                    index++;
                } else {
                    clearInterval(interval);
                }
            }, 50); // Adjust the speed of typing here
        }
    }));

    return (
        <div className="order-display">
            {displayedText}
        </div>
    );
});

export default OrderDisplay;