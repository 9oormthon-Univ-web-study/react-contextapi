import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { todoList } from './atom';
import { TodoState } from './atom';

interface TodoItemProps {
    item: {
        id: number;
        text: string;
        isCompleted: boolean;
    };
}
const TodoItem: React.FC<TodoItemProps> = ({ item }) => {
    const [todoLists, setTodoLists] = useRecoilState(todoList);

    // findIndex메서드로 전체 배열에서 props로 전달받은 item과 같은 값의 인덱스 반환
    const index = todoLists.findIndex((todoItem) => todoItem === item);

    const replaceItemAtIndex = (arr: TodoState, index: number, newValue: TodoState[number]) => {
        return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
    };

    const editItemText = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newText = event.target.value;
        const newList = replaceItemAtIndex(todoLists, index, {
            ...item,
            text: newText,
        });
        setTodoLists(newList);
    };

    //replacdItemAtIndex 활용해서 isCompleted 반전
    const toggleItemCompletion = () => {
        const newList = replaceItemAtIndex(todoLists, index, {
            ...item,
            isCompleted: !item.isCompleted,
        });
        setTodoLists(newList);
    };

    const removeItemAtIndex = (arr: TodoState, index: number) => {
        return [...arr.slice(0, index), ...arr.slice(index + 1)];
    };

    const deleteItem = () => {
        const newList = removeItemAtIndex(todoLists, index);
        setTodoLists(newList);
    };

    return (
        <div>
            <input type="text" value={item.text} onChange={editItemText} />
            {/* onClick으로 해주면 default check 옵션을 부여해줘야함, 그래서 onChange로 구현 */}
            <input type="checkbox" checked={item.isCompleted} onChange={toggleItemCompletion} />
            <button onClick={deleteItem}>X</button>
        </div>
    );
};

export default TodoItem;
