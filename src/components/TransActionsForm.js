import { useState } from "react";

const TransActionsForm = ({ addTransaction, setIsshow }) => {
  const [formValues, setFormValues] = useState({
    type: "income",
    amount: 0,
    desc: "",
  });
  const changeHandler = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    addTransaction(formValues);
    setIsshow(false);
  };
  return (
    <form onSubmit={submitHandler} className="tnxForm">
      <input
        type="text"
        name="desc"
        onChange={changeHandler}
        placeholder="describe your transaction..."
      ></input>
      <input
        type="number"
        name="amount"
        onChange={changeHandler}
        placeholder="amount your transaction"
      ></input>
      <div className="radioBox">
        <input
          type="radio"
          value="income"
          name="type"
          checked={formValues.type === "income"}
          onChange={changeHandler}
          id="income"
        ></input>
        <label htmlFor="income">Income</label>
        <input
          type="radio"
          value="expense"
          name="type"
          checked={formValues.type === "expense"}
          onChange={changeHandler}
          id="expense"
        ></input>
        <label htmlFor="expense">Expense</label>
      </div>
      <button type="submit" className="btn primary">
        Add Transaction
      </button>
    </form>
  );
};

export default TransActionsForm;
