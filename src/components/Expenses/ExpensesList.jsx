import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  let expensesContent = <p>No expesnses found.</p>;

  if (props.items.length > 0) {
    expensesContent =
      props.items.length > 0 &&
      props.items.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        );
      });
  } else {
    return <h2 className="expenses-list__fallback">{expensesContent}</h2>;
  }
  return <ul className="expenses-list">{expensesContent}</ul>;
};

export default ExpensesList;
