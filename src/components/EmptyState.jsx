import { SquareCheckBig } from "lucide-react";

const EmptyState = () => {
  return (
    <div className="empty-state">
      <SquareCheckBig />
      <h3>No tasks yet</h3>
      <p>Add your first task to get started</p>
    </div>
  );
};

export default EmptyState;
