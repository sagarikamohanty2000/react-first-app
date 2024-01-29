
import Card from "../UI/Card";
import ExpenseDetails from "./ExpenseDetails";
import "./ExpenseList.css"

const ExpenseList = (props) => {
 
    if(props.items.length === 0)
    {
        return(
            <h2 className="expense_list_fall_back">NO Expense Found !</h2>
        )
    }
    return (
        <ul className="expense_list">        
         {props.items.map((expense) => (
            <Card className="expense-item"  key={expense.id}>
             
              <ExpenseDetails
                date={expense.date}
                name={expense.name}
                amount={expense.amount}
              />
            </Card>
          ))}
          </ul>

    )

}


export default ExpenseList;