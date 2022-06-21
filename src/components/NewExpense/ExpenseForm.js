import './ExpenseForm.css'
import {useState} from "react";

//  manage state with one use state variable
// ensuring to copy other variable that do not change
//  back into the state variable
const ExpenseForm = () => {
    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredDate: '',
        enteredAmount: '',
    })

    const titleChangeHandler = (event) => {
        setUserInput((prevState)=>{
       return { ...userInput, enteredTitle: event.target.value }
        });
    };
    const amountChangeHandler = (event) => {
        setUserInput((prevState)=>{
            return { ...userInput, enteredAmount: event.target.value }
        });

    };
    const dateChangeHandler = (event) => {
        setUserInput((prevState)=>{
            return { ...userInput, enteredDate: event.target.value }
        });
    };

    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label> Title</label>
                    <input type="text" onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label> Amount</label>
                    <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label> Date</label>
                    <input type="date" min="2019-01-01" step="2022-12-31" onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add expense</button>
            </div>
        </form>
    );
};
export default ExpenseForm;