import { useEffect, useState } from "react";
import OverView from "./OverView";
import TransActions from "./TransActions";

const ExpenseApp = () => {
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [transaction, setTransaction] = useState([]);

  const addTransaction = (formValues) => {
    setTransaction([...transaction, { ...formValues, id: Date.now() }]);
  };
  useEffect(() => {
    let inc = 0;
    let exp = 0;
    transaction.forEach((t) => {
      t.type === "income"
        ? (inc = inc + parseInt(t.amount))
        : (exp = exp + parseInt(t.amount));
    });
    setIncome(inc);
    setExpense(exp);
  }, [transaction]);

  return (
    <section className="appContainer">
      <OverView
        income={income}
        expense={expense}
        addTransaction={addTransaction}
      />
      <TransActions transaction={transaction} />
    </section>
  );
};

export default ExpenseApp;
