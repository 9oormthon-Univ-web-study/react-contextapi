import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import counterStore from './counterStore';
import { CounterProvier } from './context/counterContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
// store를 사용하려면 인스턴스를 생성한 후 객체를 내려줘야 함
const store = new counterStore(); // 그냥 생성한 인스턴스를 직접 넣어주기만 하면 매번 넣어줘야하지만 props drilling 발생 가능 => Provider 사용

root.render(
    <CounterProvier value={store}>
        <App />
    </CounterProvier>
);
