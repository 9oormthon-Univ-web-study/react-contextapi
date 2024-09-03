import React, { useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from './toolkitVersion/reducer/store/store';
import { increment, decrement, incrementAmount } from './toolkitVersion/reducer/counterReducer';

type Props = {
    value: any;
    onIncrement: () => void;
    onDecrement: () => void;
};

function App({ value, onIncrement, onDecrement }: Props) {
    const dispatch: AppDispatch = useDispatch();
    // const [todoValue, setTodoValue] = useState('');
    const count = useSelector((state: RootState) => state.counter.value);
    const counter = useSelector((state: RootState) => state.counter);
    // const todos: string[] = useSelector((state: RootState) => state.todos);
    // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setTodoValue(event.target.value);
    // };

    // const addTodo = (event: React.FormEvent<HTMLFormElement>) => {
    //     event.preventDefault();
    //     dispatch({ type: 'ADD_TODO', text: todoValue });
    //     setTodoValue('');
    // };
    return (
        <div>
            Clicked : {count} times
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
            {/*<ul>
                {todos.map((todo, index) => (
                    <li key={index}>{todo}</li>
                ))}
            </ul>
            <form onSubmit={addTodo}>
                <input type="text" value={todoValue} onChange={handleChange} />
                <input type="submit" />
            </form>*/}
        </div>
    );
}

export default App;
