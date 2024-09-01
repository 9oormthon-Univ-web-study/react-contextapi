import { combineReducers } from 'redux';
import counter from './counter';
import todos from './todos';

const rootReducer = combineReducers({
    counter,
    todos,
});

export default rootReducer;

//RootState 타입 정의
export type RootState = ReturnType<typeof rootReducer>;
//typeof를 통해서 rootReducer라는 함수 자체의 타입이 나오게 됨`(입력) => {반환}`
//ReturnType<T>을 통해 이 중 반환 타입만 추출하여 RootState에 할당
