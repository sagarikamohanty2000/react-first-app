import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";

function ExpenseItem(data) {
  return (
    <div>
    <div className="expense-item">
          <ExpenseDate date={data.date}/>
          <ExpenseDetails
            name={data.name}
            amount={data.amount}
            location={data.location}
          />
    </div>
    </div>
  );
}

export default ExpenseItem;
