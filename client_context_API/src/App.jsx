import './App.css';
import Summary from './pages/SummaryPage/Summary';
import Order from './pages/OrderPage/Order';
import { useState } from 'react';
import Complete from './pages/CompletePage/Complete';

function App() {
    const [step, setStep] = useState('0');

    return (
        <div style={{ padding: '4rem' }}>
            {step === '0' && <Order setStep={setStep} />}
            {step === '1' && <Summary setStep={setStep} />}
            {step === '2' && <Complete setStep={setStep} />}
        </div>
    );
}

export default App;
