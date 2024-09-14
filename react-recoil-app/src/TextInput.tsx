import React from 'react';
import { useRecoilState } from 'recoil';
import { textState } from './App';

const TextInput: React.FC = () => {
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
