import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [displayForm, setDisplayForm] = useState(false);
  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
    displayFormHandler();
  };

  const displayFormHandler = () => {
    setDisplayForm((prevState) => !prevState);
  };

  return (
    <div className="new-expense">
      {!displayForm && (
        <button onClick={displayFormHandler}>Add New Expense</button>
      )}
      {displayForm && (
        <ExpenseForm
          onSaveExpenseData={onSaveExpenseDataHandler}
          displayForm={displayFormHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
