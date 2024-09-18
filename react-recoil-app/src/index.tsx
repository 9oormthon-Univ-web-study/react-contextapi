import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RecoilRoot } from 'recoil';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Todo from './Todo';
import { useRecoilValue } from 'recoil';
import { currentUserNameQuery } from './atom';

const CurrentUserInfo = () => {
    const userName = useRecoilValue(currentUserNameQuery);
    return <div>{userName}</div>;
};

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <RecoilRoot>
        <RecoilRoot>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="/todo" element={<Todo />} />
                </Routes>
            </BrowserRouter>
            <React.Suspense fallback={<div>...loading</div>}>
                {/* Suspense를 통해서 로딩시간동안 보여줄 화면 fallback 제공 */}
                비동기 요청 확인
                <CurrentUserInfo />
            </React.Suspense>
        </RecoilRoot>
    </RecoilRoot>
);
