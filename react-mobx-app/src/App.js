import { useContext } from 'react';
import './App.css';
import { observer } from 'mobx-react';
import { counterContext } from './context/counterContext';

//observer를 통해 스토어 구독(or Provier 사용하는 방법도 있음)
//구독하지 않으면 액션을 호출해서 observable한 값을 변화시켜도 반영이 되지 않음(값이 변화하긴 함)
const App = observer(() => {
    const myCounter = useContext(counterContext);
    return (
        <div className="App">
            <div>{myCounter.count}</div>
            <br />
            <br />
            <div>마이너스?? {myCounter.isNegative}</div>
            <br />
            <br />
            <button onClick={() => myCounter.increase()}>+</button>
            <button onClick={() => myCounter.decrease()}>-</button>
        </div>
    );
});

export default App;
