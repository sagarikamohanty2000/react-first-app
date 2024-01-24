import "./ExpenseDetails.css";
import ExpenseDate from "./ExpenseDate";

const ExpenseDetails = (data) => {

  const clickHandler = () => {
    console.log("Clicked !");
  }
  return (

      
      <div className="date_data"><ExpenseDate date={data.date}/>
      {data.name}
       {data.amount}
      {data.location}
      <button onClick={clickHandler}>Change Title</button>
      
    </div>
  );
}

export default ExpenseDetails;
