import { useState } from "react";
import AddTaskForm from "./components/AddTaskForm";
import EmptyState from "./components/EmptyState";
import FilterButtons from "./components/FilterButtons";
import Task from "./components/Task";

function App() {
  const [activeTab, setActiveTab] = useState("all");
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([task, ...tasks]);
  };

  const doneTask = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          done: true,
        };
      }
      return task;
    });

    setTasks(updatedTasks);
  };

  const undoneTask = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          done: false,
        };
      }
      return task;
    });

    setTasks(updatedTasks);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const changeActiveTab = (tab) => {
    setActiveTab(tab);
  };

  const activeTasks = tasks.filter((task) => task.done === false);
  const completedTasks = tasks.filter((task) => task.done);

  const shownTasks =
    activeTab === "active"
      ? activeTasks
      : activeTab === "completed"
        ? completedTasks
        : tasks;

  return (
    <div className="container">
      <header className="header">
        <h1>My Tasks</h1>
        <p>Stay organized, get things done</p>
        <div className="stats">
          <div className="stat">
            <span className="stat-value">{tasks.length}</span>
            <span className="stat-label">Total</span>
          </div>
          <div className="stat">
            <span className="stat-value">{activeTasks.length}</span>
            <span className="stat-label">Active</span>
          </div>
          <div className="stat">
            <span className="stat-value">{completedTasks.length}</span>
            <span className="stat-label">Done</span>
          </div>
        </div>
      </header>

      <AddTaskForm tasks={tasks} addTask={addTask} />

      <FilterButtons activeTab={activeTab} changeActiveTab={changeActiveTab} />

      {shownTasks.length === 0 ? (
        <EmptyState activeTab={activeTab} />
      ) : (
        <div className="tasks">
          {shownTasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              doneTask={doneTask}
              undoneTask={undoneTask}
              deleteTask={deleteTask}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
