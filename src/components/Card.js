import "./Card.css";

function Card(props) {

  return <div className= "expense-card">{props.children}</div>;
}

export default Card;
