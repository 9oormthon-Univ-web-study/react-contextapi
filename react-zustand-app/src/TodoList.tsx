import React, { ChangeEvent, useState } from 'react';
import { useTodoStore } from './store/useTodoStore';

const TodoList = () => {
    const { todos, isCompleted, addTodo, deleteTodo, completeTodo } = useTodoStore();

    const [todoValue, setTodoValue] = useState<string>('');
    const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
        e?.preventDefault(); // 새로고침 막아줌
        addTodo(todoValue);
        setTodoValue('');
    };
    return (
        <div>
            <h3>Todo App</h3>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    id="new-todo"
                    name="newTodo"
                    value={todoValue}
                    onChange={(e) => setTodoValue(e.target.value)}
                />
                <button>ADD</button>
            </form>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <span style={{ textDecoration: todo.isCompleted ? 'line-through' : 'unset' }}>
                            {todo.text}{' '}
                        </span>
                        {!todo.isCompleted} ?{' '}
                        <button
                            onClick={() => {
                                completeTodo(todo.id);
                            }}
                        >
                            체크
                        </button>
                        <button
                            onClick={() => {
                                deleteTodo(todo.id);
                            }}
                        >
                            엑스
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
