import React, { useState } from 'react';
import useToInputOrTodo from './useToInputOrTodo';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { getId, todoList, todoItem } from './atom';
import TodoItem from './TodoItem';

const Todo: React.FC = () => {
    const goToInput = useToInputOrTodo();
    const [value, setValue] = useState<string>('');
    const setTodoList = useSetRecoilState(todoList);
    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };
    // useRecoilValue()로 atom에서 상태 불러옴
    const todoLists = useRecoilValue(todoList);
    // setState함수의 콜백 인자로 현재 상태가 들어오는 것을 활용해서 새로운 객체를 추가해서 배열에 추가
    const addItem = () => {
        setTodoList((oldTodoList) => [
            ...oldTodoList,
            {
                id: getId(),
                text: value,
                isCompleted: false,
            },
        ]);
        setValue(''); // 값을 리스트에 추가하면 입력칸 다시 초기화
    };
    return (
        <div>
            <div>이곳은 Todo</div>
            <input type="text" value={value} onChange={handleInput} />
            <div>
                {todoLists.map((todoItem: todoItem) => (
                    <TodoItem item={todoItem} />
                ))}
            </div>
            <button onClick={addItem}>Add todo</button>
            <button onClick={goToInput}>Go To Input</button>
        </div>
    );
};

export default Todo;
