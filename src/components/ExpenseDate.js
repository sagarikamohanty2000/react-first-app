import "./ExpenseDate.css";

function ExpenseDate(data) {
  const day = data.date.toLocaleString("en-Us", { month: "long" });
  const month = data.date.toLocaleString("en-Us", { day: "2-digit" });
  const year = data.date.getFullYear();

  return (
    <div>
      <div>
        {day} {month} {year}
      </div>
      <div></div>
      <div></div>
    </div>
  );
}

export default ExpenseDate;
