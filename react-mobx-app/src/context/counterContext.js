import { createContext } from 'react';

//context 생성
export const counterContext = createContext();

//Provider 생성

/* 추가적인 로직이나 상태를 포함할 수 있는 방식
export function CountContextProvider(props) {
    return <counterContext.Provider value>{props.children}</counterContext.Provider>;
}
*/

//추가적인 로직 없이 순수한 Provider만 제공
export const CounterProvier = counterContext.Provider;
