import "./ExpenseItem.css";
import React,{useState} from 'react';
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from"./ExpenseList";

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
   
  // let expenseContent = <p>No Expense Found!</p>
  
  // if(filterExpense.length > 0 )
  // {
  //   expenseContent = filterExpense.map((expense) => (
  //     <Card className="expense-item"  key={expense.id}>
       
  //       <ExpenseDetails
  //         date={expense.date}
  //         name={expense.name}
  //         amount={expense.amount}
  //       />
  //     </Card>
  //   ))
  // }
  return (
    <div>
      <ExpenseFilter selected={filterYear} onChangeFilter={filterChangeHandler}/>
       <ExpenseList items={filterExpense}></ExpenseList>
    </div>
  );
};

export default ExpenseItem;
