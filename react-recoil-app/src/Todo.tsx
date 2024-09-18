import React, { useState } from 'react';
import useToInputOrTodo from './useToInputOrTodo';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { getId, todoListState, todoItem, filteredTodoListState } from './atom';
import TodoItem from './TodoItem';
import TodoListFilters from './TodoListFilters';
import TodoListStats from './TodoListStats';

const Todo: React.FC = () => {
    const goToInput = useToInputOrTodo();
    // input 입력값을 담아둘 상태
    const [value, setValue] = useState<string>('');
    // atom에서 가져온 전체 할 일 목록들, `useSetRecoilState()`로 호출하여 상태를 바꿀 수 있도록함
    const setTodoList = useSetRecoilState(todoListState);
    // input에 변화가 생길 때 호출하는 이벤트 헨들러
    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };
    // get메서드로 이루어진 selector를 읽기전용으로 불러옴
    const filterdTodoList = useRecoilValue(filteredTodoListState);
    // setState함수의 콜백 인자로 현재 상태가 들어오는 것을 활용해서 새로운 객체를 추가해서 배열에 추가
    const addItem = () => {
        setTodoList((oldTodoList) => [
            ...oldTodoList, // 기존 리스트에
            {
                // 해당 객체를 추가
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
            <TodoListStats />
            <input type="text" value={value} onChange={handleInput} />
            <TodoListFilters />
            <div>
                {filterdTodoList.map((todoItem: todoItem) => (
                    <TodoItem item={todoItem} />
                ))}
            </div>
            <button onClick={addItem}>Add todo</button>
            <button onClick={goToInput}>Go To Input</button>
        </div>
    );
};

export default Todo;
