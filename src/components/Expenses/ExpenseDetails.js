
const ExpenseDetails = (data) => {
  return (
    <div>
      <div>{data.name}{"   "}{" "}{data.amount}{" "}{" "}{data.location}</div>
    </div>
  );
}

export default ExpenseDetails;
