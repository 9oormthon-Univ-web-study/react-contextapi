import React, { useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from './toolkitVersion/reducer/store/store';
import { increment, decrement, incrementAmount } from './toolkitVersion/reducer/counterReducer';
import AsyncCounter from './toolkitVersion/AsyncCounter';

function App() {
    const dispatch: AppDispatch = useDispatch();
    // const [todoValue, setTodoValue] = useState('');
    const count = useSelector((state: RootState) => state.counter.value);
    // const todos: string[] = useSelector((state: RootState) => state.todos);
    // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setTodoValue(event.target.value);
    // };

    // const addTodo = (event: React.FormEvent<HTMLFormElement>) => {
    //     event.preventDefault();
    //     dispatch({ type: 'ADD_TODO', text: todoValue });
    //     setTodoValue('');
    // };
    const [showTest, setShowTest] = useState(false);

    const handleToggleTest = () => {
        setShowTest((prev) => !prev);
    };
    return (
        <div>
            Clicked : {count} times
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={() => dispatch(incrementAmount(5))}>+5</button>
            {/*<ul>
                {todos.map((todo, index) => (
                    <li key={index}>{todo}</li>
                ))}
            </ul>
            <form onSubmit={addTodo}>
                <input type="text" value={todoValue} onChange={handleChange} />
                <input type="submit" />
            </form>*/}
            <div style={{ marginTop: '20px' }}>
                <button onClick={handleToggleTest}>
                    {showTest ? 'Unmount Test Component' : 'Mount Test Component'}
                </button>
                {showTest && <AsyncCounter />}
            </div>
        </div>
    );
}

export default App;
