import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

interface CounterState {
    value: number;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: CounterState = { value: 0, status: 'idle', error: null };

//비동기 액션 생성
export const incrementAsync = createAsyncThunk(
    'counter/incrementAsync', //액션 타입에 따라 pending, fulfilled, rejected가 붙은 액션 타입이 생성됨
    async (amount: number) => {
        await new Promise((resolve) => setTimeout(resolve, 1000)); //1초 지연 후 amount 반환
        return amount;
    }
);

//실제 호출 요청 추가(현재로는 Async 요청을 중간에 중단해서 rejected 상태가 되어도 요청 값은 오고있는 상태)
//rejected 상태가 되면 request요청도 취소가 되도록 추가 예정
export const fetchUsersAsync = createAsyncThunk('counter/fetchUsers', async () => {
    const users = await axios.get('https://jsonplaceholder.typicode.com/users');
    console.log(users);
});

//action과 reducer를 한번에 설정할 수 있으며 action, reducer를 별도로 관리할 수 있다는 장점을 가진 createSlice()
const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state) {
            state.value++;
        },
        decrement(state) {
            state.value--;
        },
        incrementAmount(state, action) {
            state.value += action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            //'counter/incrementAsync/pending'액션을 디스패치하는 액션 생성
            .addCase(incrementAsync.pending, (state) => {
                state.status = 'loading';
            })
            //'counter/incrementAsync/fulfilled'액션을 디스패치하는 액션 생성
            .addCase(incrementAsync.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.value += action.payload;
            })
            //'counter/incrementAsync/rejected'액션을 디스패치하는 액션 생성
            .addCase(incrementAsync.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || null;
            });
    },
});

export const { increment, decrement, incrementAmount } = counterSlice.actions;
export default counterSlice.reducer;

/*

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


*/
