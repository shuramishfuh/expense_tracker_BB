import './Expenses.css';
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import {useState} from 'react'
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
    const [filteredDate, setFilteredDate] = useState('2020');
    const onselectDateHandler = (dateSelected) => {
        setFilteredDate(dateSelected);
    };

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredDate
    });

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selectedYear={filteredDate} onselect={onselectDateHandler}/>
                <ExpensesList items={filteredExpenses}/>
            </Card>
        </div>
    )
}

export default Expenses;