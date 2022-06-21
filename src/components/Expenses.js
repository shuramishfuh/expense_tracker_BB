import ExpenseItem from "./ExpenseItem";

function ListExpenses(expenses) {

    return (
        <div className="expenses">
            <ExpenseItem>
                date={expenses[0].date}
                amount={expenses[0].Amount}
                title={expenses[0].title}
            </ExpenseItem>
            <ExpenseItem>
                date={expenses[1].date}
                amount={expenses[1].Amount}
                title={expenses[1].title}
            </ExpenseItem>
            <ExpenseItem>
                date={expenses[2].date}
                amount={expenses[2].Amount}
                title={expenses[2].title}
            </ExpenseItem>

        </div>
    )
}

export default ListExpenses;