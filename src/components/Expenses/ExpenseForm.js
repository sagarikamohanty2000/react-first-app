

const ExpenseForm = () => {

    const submitHandler = (event) =>
    {
        console.log(event.target.value);
    }

    const nameHandler = (event) => {
        console.log(event.target.value);
    }
  return (
    <div className="Container">
      <h2>Add Expense</h2>
      <form>
        <label >Date :</label>
        <input name="date" type="date"></input>
        <label >Expense Name :</label>
        <input name="name" type="text" onChange={nameHandler}></input>
        <label >Amount :</label>
        <input name="amount" type="number"></input>
        <button type="submit" onClick={submitHandler}> Add Expense</button>
      </form>
    </div>
  );
};

export default ExpenseForm;