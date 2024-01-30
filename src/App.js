import React, { useState } from "react";
import "./App.css";
import NewExpense from "./components/Expenses/NewExpense";
import ExpenseItem from "./components/Expenses/ExpenseItem";

const DummyExpenses = [
  {
    id: "e1",
    name: "Car",
    amount: 100,
    location: "Kolkata",
    date: new Date(2020, 2, 28),
  },

  {
    id: "e2",
    name: "Pen",
    amount: 342,
    location: "Kolkata",
    date: new Date(2020, 7, 28),
  },

  {
    id: "e3",
    name: "laptop",
    amount: 500,
    location: "Bangalore",
    date: new Date(2020, 6, 28),
  },
];
const App = () => {
  const [expenses, setNewExpenses] = useState(DummyExpenses);

  const newExpenseHandler = (newExpenseData) => {
    setNewExpenses((prevExpenses) => {
      return [newExpenseData, ...prevExpenses];
    });
    console.log("In App.js");
    console.log(newExpenseData);
  };
  return (
    <div className="App">
      <header className="App-header">
        <h3>Expense Items</h3>
      </header>
      <NewExpense addButton={true} onFetchingNewExpense={newExpenseHandler} />

      <div className="boxContainer">
        <ExpenseItem items={expenses}></ExpenseItem>{" "}
      </div>
    </div>
  );
};

export default App;
