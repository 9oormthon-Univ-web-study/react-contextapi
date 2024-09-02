import React, { useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './reducer/reducer';
import { count } from 'console';

type Props = {
    value: any;
    onIncrement: () => void;
    onDecrement: () => void;
};

function App({ value, onIncrement, onDecrement }: Props) {
    const dispatch = useDispatch();
    const [todoValue, setTodoValue] = useState('');
    const counter = useSelector((state: RootState) => state.counter);
    const todos: string[] = useSelector((state: RootState) => state.todos);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTodoValue(event.target.value);
    };

    const addTodo = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch({ type: 'ADD_TODO', text: todoValue });
        setTodoValue('');
    };
    return (
        <div>
            Clicked : {counter} times
            <button onClick={onIncrement}>+</button>
            <button onClick={onDecrement}>-</button>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>{todo}</li>
                ))}
            </ul>
            <form onSubmit={addTodo}>
                <input type="text" value={todoValue} onChange={handleChange} />
                <input type="submit" />
            </form>
        </div>
    );
}

export default App;
