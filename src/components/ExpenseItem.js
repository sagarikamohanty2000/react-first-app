
import "./ExpenseItem.css";

function ExpenseItem(data)
{
    return <div>
        
        <ul className="expense-item">
            <li>{data.name}{"  "}{data.amount}{"  "}{data.location}</li>
        </ul>
    </div>
}

export default ExpenseItem;