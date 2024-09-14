import React from 'react';
import { useRecoilValue } from 'recoil';
import { charCounterState } from './App';

const Character = () => {
    // Selector의 값을 읽어오기 위해 사용(atom에 직접 접근하면 recoil 메모이제이션이나 의존성 추적, 가독성 문제 등 발생)
    const count = useRecoilValue(charCounterState);
    return <div>Character Count : {count}</div>;
};

export default Character;
