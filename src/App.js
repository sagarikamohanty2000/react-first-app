import logo from "./logo.svg";
import "./App.css";
import NewExpense from "./components/Expenses/NewExpense";
import ExpenseItem from "./components/Expenses/ExpenseItem";



const App = () => {
  const expense = [
    {
      name: "Car",
      amount: 10000,
      location: "Kolkata",
      date: new Date(2021, 2, 28),
    },

    {
      name: "Pen",
      amount: 20,
      location: "Kolkata",
      date: new Date(2021, 2, 28),
    },

    {
      name: "laptop",
      amount: 50000,
      location: "Bangalore",
      date: new Date(2021, 2, 28),
    },

  ];


  const newExpenseHandler = (newExpenseData) => {
    console.log("In App.js");
    console.log(newExpenseData);
  }
  return (

    <div className="App">
      <NewExpense onFetchingNewExpense = {newExpenseHandler}/>

      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        
        <h3>Expense Items</h3>
     </header>
     <div className="boxContainer">
        <ExpenseItem
          date={expense[0].date}
          name={expense[0].name}
          amount={expense[0].amount}
          location={expense[0].location}
        ></ExpenseItem>

        <ExpenseItem
          date={expense[1].date}
          name={expense[1].name}
          amount={expense[1].amount}
          location={expense[1].location}
        ></ExpenseItem>

        <ExpenseItem
          date={expense[2].date}
          name={expense[2].name}
          amount={expense[2].amount}
          location={expense[2].location}
        ></ExpenseItem>
        {/* <ExpenseItem
          date= {newExpense.date}
          name={newExpense.name}
          amount={newExpense.amount}
        ></ExpenseItem> */}
    </div>
  </div>  
  );
}

export default App;
