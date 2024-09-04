import React, { useEffect } from 'react';
import { AppDispatch, RootState } from './reducer/store/store'; //import 조심
import { useDispatch, useSelector } from 'react-redux';
import { incrementAsync } from './reducer/counterReducer';

const AsyncCounter = () => {
    const dispatch: AppDispatch = useDispatch();
    const status = useSelector((state: RootState) => state.counter.status);
    const error = useSelector((state: RootState) => state.counter.error);

    useEffect(() => {
        const asyncOperation = dispatch(incrementAsync(10));
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
