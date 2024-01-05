import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";

function ExpenseItem(data) {
  return (
    <div>
      <ul className="expense-item">
        <li>
          <ExpenseDate date={data.date} />{" "}
          <ExpenseDetails
            name={data.name}
            amount={data.amount}
            location={data.location}
          />
        </li>
      </ul>
    </div>
  );
}

export default ExpenseItem;
