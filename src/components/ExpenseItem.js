
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(data)
{   
    return <div>
        
        <ul className="expense-item">
            <li><ExpenseDate date={data.date}/>{data.name}{"                "}{data.amount}{"              "}{data.location}</li>
        </ul>
    </div>
}

export default ExpenseItem;