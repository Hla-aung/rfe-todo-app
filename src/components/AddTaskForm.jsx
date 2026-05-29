import { Plus } from "lucide-react";
import { useState } from "react";

const AddTaskForm = ({ tasks, addTask }) => {
  const [taskName, setTaskName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      id: tasks.length + 1,
      name: taskName,
      done: false,
    };

    addTask(newTask);
    setTaskName("");
  };

  return (
    <form onSubmit={handleSubmit} className="add-form">
      <input
        type="text"
        placeholder="What needs to be done?"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <button type="submit">
        <Plus />
        Add Task
      </button>
    </form>
  );
};

export default AddTaskForm;
