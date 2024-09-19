import React from 'react';
import './App.css';
import Counters from './Counters';
import TodoList from './TodoList';

function App() {
    return (
        <div className="App">
            <Counters />
            <TodoList />
        </div>
    );
}

export default App;
