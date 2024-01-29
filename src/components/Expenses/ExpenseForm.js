import React, { useState } from "react";

const ExpenseForm = (props) => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const [button, setAddButton] = useState( props.addButton);
  // const [inputs, setInputs] = useState({
  //   name:"",
  //   amount: "",
  //   date: ""
  // });

  const addExpenseHandler = () => {
    setAddButton(false);
  }

  const cancelExpenseFormHandler = () => {
    setAddButton(true);
  }

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

  if(button === true)
  {
    return (
      <div className="Container">
        <form>
          <button type="button" onClick={addExpenseHandler}>Add Expense</button>
        </form>
      </div>
    )
  }
  return (
    <div className="Container">
      <h2>Add Expense</h2>
      <form onSubmit={submitHandler}>
        <label>Date :</label>
        <input
          name="date"
          type="date"
          value={date}
          onChange={dateHandler}
        ></input>
        <label>Expense Name :</label>
        <input
          name="name"
          type="text"
          value={name}
          onChange={nameHandler}
        ></input>
        <label>Amount :</label>
        <input
          name="amount"
          type="number"
          value={amount}
          onChange={amountHandler}
        ></input>
        <button type="submit"> Add Expense</button>
        <button type="button" onClick={cancelExpenseFormHandler}>Cancel</button>
      </form>
    </div>
  );
};


export default ExpenseForm;
