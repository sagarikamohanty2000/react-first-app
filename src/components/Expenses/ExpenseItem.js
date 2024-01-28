import "./ExpenseItem.css";
import React,{useState} from 'react';
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";

const ExpenseItem = (data) => {

  const [filterYear,setFilter] = useState('2020');

  const filterChangeHandler = selectYear => {
    setFilter(selectYear);
  }

  const checkFilterExpense = (expense) => {
    if(expense.date.getFullYear().toString() === filterYear)
    return expense
  }
  const filterExpense = data.items.filter(checkFilterExpense);
   
  let expenseContent = <p>No Expense Found!</p>
  
  if(filterExpense.length > 0 )
  {
    expenseContent = filterExpense.map((expense) => (
      <Card className="expense-item"  key={expense.id}>
       
        <ExpenseDetails
          date={expense.date}
          name={expense.name}
          amount={expense.amount}
        />
      </Card>
    ))
  }
  return (
    <div>
      <ExpenseFilter selected={filterYear} onChangeFilter={filterChangeHandler}/>
      {expenseContent}
    </div>
  );
};

export default ExpenseItem;
