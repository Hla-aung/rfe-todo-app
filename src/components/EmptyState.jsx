import { SquareCheckBig } from "lucide-react";

const EmptyState = ({ activeTab }) => {
  return (
    <div className="empty-state">
      <SquareCheckBig />
      <h3>
        No{" "}
        {activeTab === "active"
          ? "active"
          : activeTab === "completed"
            ? "completed"
            : ""}{" "}
        tasks yet
      </h3>
      <p>Add your first task to get started</p>
    </div>
  );
};

export default EmptyState;
