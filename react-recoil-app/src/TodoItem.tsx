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
    const [text, setText] = useState<string>('');

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

    return (
        <div>
            <input type="text" value={item.text} onChange={editItemText} />
        </div>
    );
};

export default TodoItem;
