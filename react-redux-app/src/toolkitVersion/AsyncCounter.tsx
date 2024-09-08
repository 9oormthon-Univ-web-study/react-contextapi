import { useEffect } from 'react';
import { AppDispatch, RootState } from './reducer/store/store'; //import 조심
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsersAsync, incrementAsync } from './reducer/counterReducer';

const AsyncCounter = () => {
    const dispatch: AppDispatch = useDispatch();
    const status = useSelector((state: RootState) => state.counter.status);
    const error = useSelector((state: RootState) => state.counter.error);

    useEffect(() => {
        //`incrementAsync`는 단순한 액션 객체가 아니라, 비동기 작업을 시작하고 그 결과에 따라
        //적절한 액션(pending, fulfilled, rejected)을 디스패치하는 함수
        //const asyncOperation = dispatch(incrementAsync(10));
        const asyncOperation = dispatch(fetchUsersAsync());
        return () => {
            asyncOperation.abort(); //abort 메서드는 비동기 액션에만 존재함
        };
    }, [dispatch]);

    return (
        <div>
            {status === 'loading' && <p>Loading...</p>}
            {status === 'succeeded' && <p>Operation succeeded!</p>}
            {status === 'failed' && <p>Error: {error}</p>}
            <div>Status: {status}</div>
        </div>
    );
};

export default AsyncCounter;
