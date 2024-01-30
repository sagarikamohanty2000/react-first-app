import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const [button, setAddButton] = useState(props.addButton);
  // const [inputs, setInputs] = useState({
  //   name:"",
  //   amount: "",
  //   date: ""
  // });

  const addExpenseHandler = () => {
    setAddButton(false);
  };

  const cancelExpenseFormHandler = () => {
    setAddButton(true);
  };

  const amountHandler = (event) => {
    // setInputs((prevState)=> {
    //   return {...prevState, amount:event.target.value}
    // });
    setAmount(event.target.value);
    console.log(event.target.value);
  };

  const nameHandler = (event) => {
    // setInputs((prevState)=> {
    //   return {...prevState, name:event.target.value}
    // });
    setName(event.target.value);
    console.log(event.target.value);
  };

  const dateHandler = (event) => {
    // setInputs((prevState)=> {
    //   return {...prevState, date:event.target.value}
    // });
    setDate(event.target.value);
    console.log(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseDetails = {
      name: name,
      amount: amount,
      date: new Date(date),
    };
    props.onSaveNewExpense(expenseDetails);
    setDate("");
    setName("");
    setAmount("");
    setAddButton(true);
    //console.log(expenseDetails);
  };

  if (button === true) {
    return (
      <div className="button-addExpense">
        <form>
          <button type="button" id="btn" onClick={addExpenseHandler}>
            Add Expense
          </button>
        </form>
      </div>
    );
  }
  return (
    <div className="Container">
      <div className="form-header">
        <h2>Add Expense</h2>
      </div>
      <form onSubmit={submitHandler}>
        <div className="form-first-line">
          <label for="name" id="name-label">
            Expense Name{" "}
          </label>

          <label for="amount" id="amount-label">
            Amount{" "}
          </label>
        </div>
        <div className="form-first-line">
          <input
            name="name"
            type="text"
            id="name-input"
            value={name}
            onChange={nameHandler}
          ></input>
          <input
            name="amount"
            type="number"
            id="amount-input"
            value={amount}
            onChange={amountHandler}
          ></input>
        </div>
        <div className="form-second-line">
          <label id="date-label">Date </label>
        </div>
        <div className="form-second-line">
          <input
            name="date"
            type="date"
            id="date-input"
            value={date}
            onChange={dateHandler}
          ></input>
        </div>
        <div>
          <button type="submit" id="addExpenseBtn">
            Add Expense
          </button>
          <button
            type="button"
            id="cancelBtn"
            onClick={cancelExpenseFormHandler}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
