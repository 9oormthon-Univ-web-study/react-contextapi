import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import counter from './reducer/counter';
import rootReducer from './reducer/reducer';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

//앱 내 모든 트리를 담고 있는 store에서 counter라는 이름의 reducer를 가져와서 store 변수에 할당
const store = createStore(rootReducer);

store.dispatch({
    type: 'ADD_TODO',
    text: 'USE_REDUX',
});

console.log(store.getState());

const render = () =>
    root.render(
        <React.StrictMode>
            <Provider store={store}>
                {/* Provider를 사용하면 하위 컴포넌트에서 props drilling 없이 useSelector나 useDispatch로 상태와 액션을 가져올 수 있음 */}
                <App
                    //store에 할당된 Redux 스토어에서 현재 상태 값을 받아옴
                    value={store.getState()} //counter라는 reducer를 할당받았는데 counter 함수에서는 state라는 상태를 쓰고 있기 때문에 그게 불러와짐
                    //onIncrement라는 props에 store.dispatch({type:"INCREMENT"})}를 실행시키는 화살표 함수를 전달
                    onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
                    onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
                />
            </Provider>
        </React.StrictMode>
    );

render();

store.subscribe(render);
