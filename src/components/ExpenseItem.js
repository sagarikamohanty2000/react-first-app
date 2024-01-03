
import "./ExpenseItem.css";

function ExpenseItem()
{
    const expenseItem = "Food";
    const expenseAmount = "100";
    const expenseLocation = "Bangalore";

    return <div>
        <h3>Expense Items</h3>
        <ul className="expense-item">
            <li>{expenseItem}{"  "}{expenseAmount}{"  "}{expenseLocation}</li>
        </ul>
    </div>
}

export default ExpenseItem;