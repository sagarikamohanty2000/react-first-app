

function ExpenseDetails(data) {
  return (
    <div>
      {data.name}
      {"                "}
      {data.amount}
      {"              "}
      {data.location}
    </div>
  );
}

export default ExpenseDetails;
