import "./ExpenseDetails.css";
import ExpenseDate from "./ExpenseDate";

const ExpenseDetails = (data) => {
  return (
    <div className="Para">
      <ul>
     <li className="date_data"><ExpenseDate date={data.date}/>
      {data.name}
       {data.amount}
      {data.location}
      <button>Change Title</button></li>
      </ul>
    </div>
  );
}

export default ExpenseDetails;
