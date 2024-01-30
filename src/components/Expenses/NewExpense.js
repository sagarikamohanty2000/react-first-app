import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const onSaveHandler = (newExpenseData) => {
    const newData = {
      ...newExpenseData,
      id: Math.random(),
    };

    props.onFetchingNewExpense(newData);
    //console.log(newData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm
        addButton={props.addButton}
        onSaveNewExpense={onSaveHandler}
      />
    </div>
  );
};

export default NewExpense;
