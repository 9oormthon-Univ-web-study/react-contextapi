import './App.css';

function App({ myCounter }) {
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
}

export default App;
