import "./ExpenseItem.css";

import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";

const ExpenseItem = (data) => {
  return (

    <Card className="expense-item">
          
          <ExpenseDetails
            date={data.date}
            name={data.name}
            amount={data.amount}
            location={data.location}
          />
    </Card>
  );
}

export default ExpenseItem;
