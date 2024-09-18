import React from 'react';
import { atom, selector, RecoilState, RecoilValueReadOnly, useRecoilValue } from 'recoil';
import TextInput from './TextInput';
import './App.css';
import Character from './Character';
import useToInputOrTodo from './useToInputOrTodo';
import { currentUserNameQuery } from './atom';

// React 컴포넌트의 타입 명시
const App: React.FC = () => {
    const goToTodo = useToInputOrTodo(); // 커스텀 훅 사용

    return (
        <div className="App">
            <TextInput />
            <Character />
            <button onClick={goToTodo}>Toggle Input/Todo</button>
        </div>
    );
};

export default App;
