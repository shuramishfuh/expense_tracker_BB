import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import {useState} from 'react'

const Expenses = (props) => {
    const [dateSelected, setDateSelected] = useState('');
    const onselectDate = (dateSelected) => {
        setDateSelected(dateSelected);
        console.log(dateSelected);
    }

    return (
        <div>
            <ExpensesFilter onselect ={onselectDate}/>
            <Card className="expenses">
                <ExpenseItem
                    date={props.items[0].date}
                    amount={props.items[0].Amount}
                    title={props.items[0].title}
                />
                <ExpenseItem
                    date={props.items[1].date}
                    amount={props.items[1].Amount}
                    title={props.items[1].title}
                />
                <ExpenseItem
                    date={props.items[2].date}
                    amount={props.items[2].Amount}
                    title={props.items[2].title}
                />

            </Card>
        </div>
    )
}

export default Expenses;