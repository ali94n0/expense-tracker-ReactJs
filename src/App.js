import "./app.css";
import ExpenseApp from "./components/ExpenseApp";

const App = () => {
  return (
    <div className="app">
      <header>
        <h2>Expanse-Tracker App</h2>
      </header>
      <ExpenseApp />
    </div>
  );
};

export default App;
