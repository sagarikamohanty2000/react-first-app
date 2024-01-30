const ExpenseDate = (data) => {
  const day = data.date.toLocaleString("en-Us", { month: "long" });
  const month = data.date.toLocaleString("en-Us", { day: "2-digit" });
  const year = data.date.getFullYear();

  return (
    <div>
      <div>{day}</div>
      <div>{month} </div>
      <div>{year} </div>
    </div>
  );
};

export default ExpenseDate;
