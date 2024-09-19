import React from 'react';
import { useCounterStore } from './store/useCounterStore';

const Counters: React.FC = () => {
    const { count, increment, reset, setNumber } = useCounterStore();

    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        if (newValue === '' || isNaN(Number(newValue))) {
            setNumber(0);
        } else {
            setNumber(Number(newValue));
        }
    };

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={reset}>Reset</button>
            <input type="number" value={count} onChange={handleInput} placeholder="Set number" />
        </div>
    );
};

export default Counters;
