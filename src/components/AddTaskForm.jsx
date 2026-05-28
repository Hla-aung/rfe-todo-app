import { Plus } from "lucide-react";

const AddTaskForm = () => {
  const handleSubmit = () => {};

  return (
    <form onSubmit={handleSubmit} className="add-form">
      <input type="text" placeholder="What needs to be done?" />
      <button type="submit">
        <Plus />
        Add Task
      </button>
    </form>
  );
};

export default AddTaskForm;
