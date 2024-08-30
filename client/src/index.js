import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import OrderContext, { OrderContextProvider } from './context/OrderContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <OrderContextProvider>
            {/* index.js에서 전역으로 처리할 값들을 선언하고 연산하는 과정이 많아지면 가독성이 떨어지기 때문에 
            OrderContextProvider라는 함수를 외부에서 만들고 가져옴 */}
            <App />
        </OrderContextProvider>
    </React.StrictMode>
);
