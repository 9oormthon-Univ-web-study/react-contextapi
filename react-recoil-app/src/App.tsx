import './App.css';
import { atom, useRecoilState } from 'recoil';

interface TextState {
    text: string;
}

const textState = atom<TextState>({
    key: 'textState',
    default: { text: '' },
});

function App() {
    const [text, setText] = useRecoilState(textState);
    return <div className="App"></div>;
}

export default App;
