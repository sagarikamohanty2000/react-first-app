import "./ExpenseItem.css";

import ExpenseDetails from "./ExpenseDetails";

const ExpenseItem = (data) => {
  return (
    <div className="expense-item">
          
          <ExpenseDetails
            date={data.date}
            name={data.name}
            amount={data.amount}
            location={data.location}
          />
    </div>
  );
}

export default ExpenseItem;
