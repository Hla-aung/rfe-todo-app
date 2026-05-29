import { Circle, CircleCheckBig, Trash2 } from "lucide-react";

const Task = ({ task, doneTask, undoneTask, deleteTask }) => {
  return (
    <div className="task">
      <div
        className="task-name"
        onClick={() => (task?.done ? undoneTask(task?.id) : doneTask(task?.id))}
      >
        {task?.done ? (
          <CircleCheckBig className="completed-task" />
        ) : (
          <Circle />
        )}
        <p className={`${task?.done ? "done-task" : ""}`}>{task?.name}</p>
      </div>

      <Trash2 className="delete-task" onClick={() => deleteTask(task?.id)} />
    </div>
  );
};

export default Task;
