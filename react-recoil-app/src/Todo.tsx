import React from 'react';
import useToInputOrTodo from './useToInputOrTodo';

const Todo: React.FC = () => {
    const goToInput = useToInputOrTodo();
    return (
        <div>
            <div>이곳은 Todo</div>
            <button onClick={goToInput}>Go To Input</button>
        </div>
    );
};

export default Todo;
