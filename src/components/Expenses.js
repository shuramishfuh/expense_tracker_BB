import ExpenseItem from "./ExpenseItem";

function Expenses(props) {

    return (
        <div className="expenses">
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

        </div>
    )
}

export default Expenses;