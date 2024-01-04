import logo from './logo.svg';
import './App.css';
import ExpenseItem  from './components/ExpenseItem';

function App() {

  const expense = [
    {
      title:'Car',
      amount:10000,
      location:'Kolkata',
    },

    {
      title:'Pen',
      amount:20,
      location:'Kolkata',
    },

    {
      title:'laptop',
      amount: 50000,
      location:'Bangalore'
    }
  ]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
        </a>
        <h3>Expense Items</h3>

         <ExpenseItem name={expense[0].name} amount={expense[0].amount} location={expense[0].location}></ExpenseItem>
         
         <ExpenseItem name={expense[1].name} amount={expense[1].amount} location={expense[1].location}></ExpenseItem>
         
         <ExpenseItem name={expense[2].name} amount={expense[2].amount} location={expense[2].location}></ExpenseItem>
        
      </header>
    </div>
  );
}

export default App;
