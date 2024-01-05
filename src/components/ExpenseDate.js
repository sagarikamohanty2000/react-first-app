import "./ExpenseDate.css";

function ExpenseDate(data) {
  const day = data.date.toLocaleString("en-Us", { month: "long" });
  const month = data.date.toLocaleString("en-Us", { day: "2-digit" });
  const year = data.date.getFullYear();

  return (
    <div className="expense_Date">
      {day} {month} {year}
      {"             "}
    </div>
  );
}

export default ExpenseDate;
