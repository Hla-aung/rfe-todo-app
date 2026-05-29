const FilterButtons = ({ activeTab, changeActiveTab }) => {
  return (
    <div className="filters">
      <button
        className={`filter-btn ${activeTab === "all" ? "active" : ""}`}
        onClick={() => changeActiveTab("all")}
      >
        All
      </button>
      <button
        className={`filter-btn ${activeTab === "active" ? "active" : ""} `}
        onClick={() => changeActiveTab("active")}
      >
        Active
      </button>
      <button
        className={`filter-btn ${activeTab === "completed" ? "active" : ""} `}
        onClick={() => changeActiveTab("completed")}
      >
        Completed
      </button>
    </div>
  );
};

export default FilterButtons;
