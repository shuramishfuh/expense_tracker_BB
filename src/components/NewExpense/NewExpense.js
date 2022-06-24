import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";
import {useState} from "react";

const NewExpense = (props) => {
    const onSaveExpenseData = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setIsEditing(false);
    };

    const [isEditing, setIsEditing] = useState(false);

    const startEditingHandler = () => {
        setIsEditing(true)
    };
    const stopEditingHandler = () => {
        setIsEditing(false);
    }

    return (
        <div className="new-expense">
            {!isEditing && <button onClick={startEditingHandler}>Add New Expense </button>}
            {isEditing && <ExpenseForm stopEditing={stopEditingHandler} onSaveExpenseData={onSaveExpenseData}/>}
        </div>
    );
}
export default NewExpense;