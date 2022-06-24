import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import {useState} from 'react'

const Expenses = (props) => {
    const [filteredDate, setFilteredDate] = useState('2020');
    const onselectDateHandler = (dateSelected) => {
        setFilteredDate(dateSelected);
    };

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredDate
    });

    let items = <p> No Expenses found for this Year </p>;

    if (filteredExpenses.length > 0) {
        items = filteredExpenses.map(expense => <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}/>
        )
    }

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selectedYear={filteredDate} onselect={onselectDateHandler}/>
                {
                    items
                };


            </Card>
        </div>
    )
}

export default Expenses;