import React from 'react';
import { useRecoilValue } from 'recoil';
import { todoListStatsState } from './atom';

const TodoListStats: React.FC = () => {
    const { totalNum, totalCompletedNum, totalUncompletedNum, percentCompleted } = useRecoilValue(todoListStatsState);
    const formattedPercentCompleted = Math.round(percentCompleted * 100);

    return (
        <div>
            <ul>
                <li>Total items: {totalNum}</li>
                <li>List Complted : {totalCompletedNum}</li>
                <li>List Uncompleted : {totalUncompletedNum}</li>
                <li>Percent completed : {formattedPercentCompleted}</li>
            </ul>
        </div>
    );
};

export default TodoListStats;
