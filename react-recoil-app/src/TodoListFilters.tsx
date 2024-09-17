import React from 'react';
import { useRecoilState } from 'recoil';
import { todoListFilterState } from './atom';

// 선택한 필터에 맞춰서 전역 상태 바꿔주는 컴포넌트
const TodoListFilters = () => {
    const [filter, setFilter] = useRecoilState(todoListFilterState);

    const updateFilter = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setFilter(event.target.value);
    };
    return (
        <>
            Filter:
            <select value={filter} onChange={updateFilter}>
                <option value="Show All">All</option>
                <option value="Show Completed">Completed</option>
                <option value="Show Uncompleted">Uncompleted</option>
            </select>
        </>
    );
};

export default TodoListFilters;
