import React from 'react';
import { atom, selector, RecoilState, RecoilValueReadOnly } from 'recoil';
import TextInput from './TextInput';
import './App.css';
import Character from './Character';

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
        // get함수로 반환한 새로운 값은 읽기 전용, 쓰려면 set사용해야함
        const text = get(textState);
        return text.length;
    },
});
// set말고 상태를 변경하는 `useSetRecoilState()`라는 함수도 존재하는데 이는 간단한 상황에서 변경, `set`은 복잡한 로직을 캡슐화

// React 컴포넌트의 타입 명시
const App: React.FC = () => {
    return (
        <div className="App">
            <TextInput />
            <Character />
        </div>
    );
};

export default App;
