import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './toolkitVersion/reducer/store/store';
import AsyncCounter from './toolkitVersion/AsyncCounter';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

//앱 내 모든 트리를 담고 있는 store에서 counter라는 이름의 reducer를 가져와서 store 변수에 할당

const render = () =>
    root.render(
        <React.StrictMode>
            <Provider store={store}>
                {/* Provider를 사용하면 하위 컴포넌트에서 props drilling 없이 useSelector나 useDispatch로 상태와 액션을 가져올 수 있음 */}
                <App />
            </Provider>
        </React.StrictMode>
    );

render();

store.subscribe(render);
