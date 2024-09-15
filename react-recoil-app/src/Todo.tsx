import React, { useState } from 'react';
import useToInputOrTodo from './useToInputOrTodo';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { getId, todoList } from './atom';

const Todo: React.FC = () => {
    const goToInput = useToInputOrTodo();
    const [value, setValue] = useState<string>('');
    const setTodoList = useSetRecoilState(todoList);
    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };
    const todoLists = useRecoilValue(todoList);
    console.log({ todoLists });
    const addItem = () => {
        setTodoList((oldTodoList) => [
            ...oldTodoList,
            {
                id: getId(),
                text: value,
                isCompleted: false,
            },
        ]);
        setValue('');
    };
    return (
        <div>
            <div>이곳은 Todo</div>
            <input type="text" value={value} onChange={handleInput} />
            <button onClick={addItem}>Add todo</button>
            <button onClick={goToInput}>Go To Input</button>
        </div>
    );
};

export default Todo;
