import React from "react";
import Task from "../Task/Task";
function CompletedTasks({ tasks, setTasks}) {
  return (
    <div className="tasks-list completed">
      <span className="count-to-do">
        Completed ({tasks.filter((task) => task.completed).length || 0})
      </span>
      {tasks.map((task) => (
        <Task key={task.id} setTasks={setTasks} task={task} />
      ))}
    </div>
  );
}

export default CompletedTasks;
