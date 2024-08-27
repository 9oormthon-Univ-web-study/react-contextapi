import React from 'react';
import Type from '../../components/Type';

const Order = () => {
    return (
        <div>
            <h1>Travel Producs</h1>
            <div>
                <Type orderType="produtcs"></Type>
            </div>
            <div style={{ display: 'flex', marginTop: '20' }}>
                <div style={{ width: '50%' }}>
                    <Type orderType="options"></Type>
                </div>
                <div style={{ width: '50%' }}>
                    <h2>Total Price</h2>
                    <button>주문</button>
                </div>
            </div>
        </div>
    );
};

export default Order;
