import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import counterStore from './counterStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
// store를 사용하려면 인스턴스를 생성한 후 객체를 내려줘야 함
const store = new counterStore();
root.render(<App myCounter={store} />);
