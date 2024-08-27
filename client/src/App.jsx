import logo from './logo.svg';
import './App.css';
import Summary from './pages/SummaryPage/Summary';
import Order from './pages/OrderPage/Order';

function App() {
    return (
        <div style={{ padding: '4rem' }}>
            <Order></Order>
            <Summary></Summary>
        </div>
    );
}

export default App;
