import AddTaskForm from "./components/AddTaskForm";
import EmptyState from "./components/EmptyState";
import FilterButtons from "./components/FilterButtons";

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>My Tasks</h1>
        <p>Stay organized, get things done</p>
        <div className="stats">
          <div className="stat">
            <span className="stat-value">1</span>
            <span className="stat-label">Total</span>
          </div>
          <div className="stat">
            <span className="stat-value">1</span>
            <span className="stat-label">Active</span>
          </div>
          <div className="stat">
            <span className="stat-value">0</span>
            <span className="stat-label">Done</span>
          </div>
        </div>
      </header>

      <AddTaskForm />

      <FilterButtons />

      <EmptyState />
    </div>
  );
}

export default App;
