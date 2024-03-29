import './ExpenseForm.css'
import {useState} from "react";

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);

    };

    const submitHandler = (event) => {
        event.preventDefault();
        const expenses = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        };
        props.onSaveExpenseData(expenses);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };


    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label> Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label> Amount</label>
                    <input value={enteredAmount} type="number" min="0.01" step="0.01" onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label> Date</label>
                    <input value={enteredDate} type="date" min="2019-01-01" step="2022-12-31"
                           onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={props.stopEditing} >Cancel</button>
                <button type="submit">Add expense</button>
            </div>
        </form>
    );
};
export default ExpenseForm;