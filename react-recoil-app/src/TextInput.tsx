import React from 'react';
import { useRecoilState } from 'recoil';
import { textState } from './App';

const TextInput: React.FC = () => {
    // useRecoilState()가 자동으로 구독해주기 때문에 atom은 다른 컴포넌트에 있지만 자동으로 최신화가 됨
    const [text, setText] = useRecoilState(textState);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
    };

    return (
        <div>
            <input type="text" value={text} onChange={handleChange} />
            <br />
            Echo : {text}
        </div>
    );
};

export default TextInput;
