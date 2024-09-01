import React from 'react';

const ErrorBanner = ({ message }) => {
    let errorMessage = message || '에러입니다.'; //전달된 에러 메세지가 없을 때 고정된 값으로 출력하기 위해
    return <div style={{ backgroundColor: 'red' }}>{errorMessage}</div>;
};

export default ErrorBanner;
