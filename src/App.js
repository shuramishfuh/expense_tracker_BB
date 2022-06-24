import './App.css';
import {useState} from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
    const initialData = [
        {
            id: 'e1',
            title: 'insurance',
            amount: 291.8,
            date: new Date(2020, 1, 5)
        }, {
            id: 'e2',
            title: 'Car',
            amount: 20091.8,
            date: new Date(2019, 5, 7)
        }, {
            id: 'e3',
            title: 'House',
            amount: 62095.90,
            date: new Date(2021, 3, 12)
        }
    ]
    const [expenses, setExpenses] = useState(initialData);
    // add new element to previous Stateful elements
    const addExpenseHandler = expense => {
        setExpenses(prevState => {
            return [expense, ...prevState]
        })
    };
    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler}/>
            <Expenses items={expenses}/>
        </div>

    );
}

export default App;
