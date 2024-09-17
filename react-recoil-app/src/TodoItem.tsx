import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { todoListState } from './atom';
import { TodoState } from './atom';

interface TodoItemProps {
    item: {
        id: number;
        text: string;
        isCompleted: boolean;
    };
}
// 리스트 여러 항목 중 단 하나에 대한 내용을 담고 있는 컴포넌트, item에 해당 정보 담겨있음
const TodoItem: React.FC<TodoItemProps> = ({ item }) => {
    const [todoList, setTodoList] = useRecoilState(todoListState);

    // findIndex메서드로 전체 배열에서 props로 전달받은 item과 같은 값의 인덱스 반환
    const index = todoList.findIndex((todoItem) => todoItem === item);

    /**
     *
     * @param arr 전체 배열
     * @param index 대체할 곳의 인덱스
     * @param newValue 새로운 내용
     * @returns newValue객체가 index자리에 들어간 새로운 arr
     */
    const replaceItemAtIndex = (arr: TodoState, index: number, newValue: TodoState[number]) => {
        return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
    };

    // 내용 수정하는 함수
    const editItemText = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newText = event.target.value; // input의 현재 값으로 수정할 텍스트 지정
        const newList = replaceItemAtIndex(todoList, index, {
            //
            ...item,
            text: newText,
        });
        setTodoList(newList);
    };

    //replacdItemAtIndex 활용해서 isCompleted 반전
    const toggleItemCompletion = () => {
        const newList = replaceItemAtIndex(todoList, index, {
            ...item,
            isCompleted: !item.isCompleted,
        });
        setTodoList(newList);
    };

    /**
     *
     * @param arr 전체 배열
     * @param index 전체 배열에서 삭제할 곳의 index
     * @returns 전체 배열에서 index의 값이 삭제된 새로운 배열
     */
    const removeItemAtIndex = (arr: TodoState, index: number) => {
        return [...arr.slice(0, index), ...arr.slice(index + 1)];
    };

    const deleteItem = () => {
        const newList = removeItemAtIndex(todoList, index);
        setTodoList(newList);
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
