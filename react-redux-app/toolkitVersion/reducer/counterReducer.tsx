import { createAction, createReducer } from '@reduxjs/toolkit';

interface CounterState {
    value: number;
}

//인자로 type을 넣으면 자동으로 해당 type을 가진 action creater(액션 생성자)함수를 생성
const increment = createAction<number>('counter/increment');
const decrement = createAction<number>('counter/decrement');
const incrementByAmount = createAction<number>('counter/incrementByAmount');

//=> {type : 'counter/increment', payload : 3}

const initialState = { value: 0 } as CounterState;

const counterReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(increment, (state, action) => {
            state.value++;
        })
        .addCase(decrement, (state, action) => {
            state.value--;
        })
        .addCase(incrementByAmount, (state, action) => {
            state.value += action.payload;
        });
});

// 사용 예시
//생성된 함수를 호출할 때 인자를 넣어주면 payload의 프로퍼티 값으로 들어감
const action1 = increment(3); // { type: 'counter/increment', payload: 3 }
const action2 = incrementByAmount(5); // { type: 'counter/incrementByAmount', payload: 5 }

console.log(counterReducer(initialState, action1)); // { value: 1 }
console.log(counterReducer({ value: 5 }, action2)); // { value: 10 }
