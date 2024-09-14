import React from 'react';
import { atom, selector, RecoilState, RecoilValueReadOnly } from 'recoil';
import TextInput from './TextInput';
import './App.css';

// 텍스트 상태의 타입 정의
type TextState = string;

// atom의 타입 명시
export const textState: RecoilState<TextState> = atom({
    key: 'textState',
    default: '',
});

// selector의 타입 명시
export const charCounterState: RecoilValueReadOnly<number> = selector({
    key: 'charCounterState',
    get: ({ get }) => {
        const text = get(textState);
        return text.length;
    },
});

// React 컴포넌트의 타입 명시
const App: React.FC = () => {
    return (
        <div className="App">
            <TextInput />
        </div>
    );
};

export default App;
