//reducer는 상태의 변경 사항을 결정하고 업데이트 된 상태를 반환하는 역할(store 내부의 상태를 업데이트)

interface Action {
    type: string;
}
/**
 *
 * @param state 해당 reducer에서 관리할 상태 변수(getState()로 불러오기 가능)
 * @param action dispatch할 액션(`"해당 reducer를 담고있는 store를 할당한 변수".dispatch({type : "타입이름"}))`으로 불러오기 가능
 * @returns 업데이트 된 새로운 상태
 */
const counter = (state = 0, action: Action) => {
    switch (action.type) {
        case 'INCREMENT': // 상태의 변경 사항을 결정하고
            return state + 1; // 업데이트 된 상태를 반환
        case 'DECREMENT': // 상태의 변경 사항을 결정하고
            return state - 1; // 업데이트 된 상태를 반환
        default:
            return state;
    }
};

export default counter;
