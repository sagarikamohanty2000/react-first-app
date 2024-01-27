import "./ExpenseItem.css";

import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";

const ExpenseItem = (data) => {
  return (
    <div>
      {data.items.map((expense) => (
        <Card className="expense-item"  key={expense.id}>
         
          <ExpenseDetails
            date={expense.date}
            name={expense.name}
            amount={expense.amount}
          />
        </Card>
      ))}
    </div>
  );
};

export default ExpenseItem;
