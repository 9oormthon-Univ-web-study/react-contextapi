import React, { useState } from 'react';
import TodoStore from './TodoStore';
import { observer } from 'mobx-react';

//Props의 타입 정의
interface TodoListProps {
    todoStore: TodoStore;
}

const TodoList: React.FC<TodoListProps> = observer(({ todoStore }) => {
    const [value, setValue] = useState<string>('');
    return (
        <div>
            <input
                value={value}
                onChange={(event) => {
                    setValue(event.target.value);
                }}
                type="text"
            />
            <button
                onClick={() => {
                    if (value) {
                        todoStore.addTodo(value); //addTodo메서드가 호출될 때마다 전역으로 공유하는 id변수의 값이 1씩 증가하며 부여됨
                    }
                    setValue('');
                }}
            >
                Add
            </button>
            <div>Completed: {todoStore.status.completed}</div>
            <div>Remaining: {todoStore.status.remaining}</div>

            <ul>
                {todoStore.todos.map((todo) => {
                    return (
                        <li
                            key={todo.id}
                            onClick={() => {
                                todoStore.toggleTodo(todo.id);
                            }}
                        >
                            {todo.title} [{todo.completed ? 'x' : ' '}]
                        </li>
                    );
                })}
            </ul>
        </div>
    );
});
export default TodoList;
