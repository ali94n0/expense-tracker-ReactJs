import { useState } from "react";
import TransActionsForm from "./TransActionsForm";

const OverView = ({ income, expense, addTransaction }) => {
  const [isshow, setIsshow] = useState(false);
  return (
    <>
      <div className="topSection">
        <p>
          Balance: <span style={{ color: "#7e22ce" }}>${income - expense}</span>
        </p>
        <button
          className={`btn ${isshow && "cancel"}`}
          onClick={() => setIsshow((prevState) => !prevState)}
        >
          {isshow ? "Cancele" : "Add"}
        </button>
      </div>
      {isshow && (
        <TransActionsForm
          addTransaction={addTransaction}
          setIsshow={setIsshow}
        />
      )}
      <div className="resultSection">
        <div className="expenseBox">
          Expense: <span style={{ color: "#ec4899" }}>${expense}</span>
        </div>
        <div className="expenseBox">
          Income: <span>${income}</span>
        </div>
      </div>
    </>
  );
};

export default OverView;
