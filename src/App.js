import './App.css';

import Expenses from "./components/Expenses/Expenses";

function App() {
    const expenses = [
        {
            id: 'e1',
            title: 'insurance',
            Amount: 291.8,
            date: new Date(2000, 1, 5)
        }, {
            id: 'e2',
            title: 'Car',
            Amount: 20091.8,
            date: new Date(2010, 5, 7)
        }, {
            id: 'e3',
            title: 'House',
            Amount: 62095.90,
            date: new Date(2014, 3, 12)
        }
    ]

    return (
        <div>
            <Expenses items={expenses}/>
        </div>

    );
}

export default App;
