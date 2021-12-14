import React from "react";
import Task from "../Task/Task";

function ActiveTasks({ tasks, setTasks, setChangeableTask }) {
  return (
    <div className="tasks-list">
      <span className="count-to-do">To do ({tasks.length || 0})</span>
      {tasks.map((task) => (
        <Task key={task.id} setTasks={setTasks} task={task} setChangeableTask={setChangeableTask} />
      ))}
    </div>
  );
}

export default ActiveTasks;
