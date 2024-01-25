
import React, {useState} from'react';

const ExpenseForm = () => {

   const [name, setName] = useState('');
   const [amount,setAmount] = useState('');
   const [date, setDate] = useState('');

    const amountHandler = (event) =>
    {
      setAmount(event.target.value);
        console.log(event.target.value);
    }

    const nameHandler = (event) => {
      setName(event.target.value);
        console.log(event.target.value);
    }

    const dateHandler = (event) => {
      setDate(event.target.value);
      console.log(event.target.value);
    }
  return (
    <div className="Container">
      <h2>Add Expense</h2>
      <form>
        <label >Date :</label>
        <input name="date" type="date" onChange={dateHandler}></input>
        <label >Expense Name :</label>
        <input name="name" type="text" onChange={nameHandler}></input>
        <label >Amount :</label>
        <input name="amount" type="number" onChange={amountHandler}></input>
        <button type="submit"> Add Expense</button>
      </form>
    </div>
  );
};

export default ExpenseForm;