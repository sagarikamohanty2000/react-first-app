import React, { useState } from "react";
import "./ExpenseDetails.css";
import ExpenseDate from "./ExpenseDate";

const ExpenseDetails = (data) => {
  // const [amount, setAmount] = useState(data.amount);    ****  use state to change the amount which is temporarily not being used

  // const clickHandler = () => {
  //   setAmount(100);
  //   console.log(amount);
  // };
  return (
    <li className="data-details">
      <div className="data-date">
        <ExpenseDate date={data.date} />
      </div>
      <div className="data-name">{data.name}</div>
      <div className="data-amount">{data.amount}</div>
      {/*       
      <div className="data-change__btn">
      <button onClick={clickHandler}>Change Amount</button>
      </div> */}
    </li>
  );
};

export default ExpenseDetails;
