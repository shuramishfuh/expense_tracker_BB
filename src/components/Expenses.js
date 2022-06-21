import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import Card from "./Card";
function Expenses(props) {

    return (
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
    )
}

export default Expenses;