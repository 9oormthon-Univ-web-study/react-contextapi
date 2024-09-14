import './App.css';
import { atom } from 'recoil';
import TextInput from './TextInput';

export const textState = atom({
    key: 'textState',
    default: '',
});

function App() {
    return (
        <div className="App">
            <TextInput />
        </div>
    );
}

export default App;
