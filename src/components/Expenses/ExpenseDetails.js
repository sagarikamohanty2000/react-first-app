import React, { useState } from "react";
import "./ExpenseDetails.css";
import ExpenseDate from "./ExpenseDate";

const ExpenseDetails = (data) => {
  const [amount, setAmount] = useState(data.amount);

  const clickHandler = () => {
    setAmount(100);
    console.log(amount);
  };
  return (
    <div className="date_data">
      <ExpenseDate date={data.date} />
      {data.name}
      {amount}
      {/*{data.location}*/}
      <button onClick={clickHandler}>Change Amount</button>
    </div>
  );
};

export default ExpenseDetails;
