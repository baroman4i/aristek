import React from "react";
import TaskTools from "../TaskTools/TaskTools";

function Task({ task, setTasks, setChangeableTask }) {

  return (
    <div className="task">
      <input
        type="checkbox"
        name="isCompleted"
        onChange={() =>
          setTasks((prev) =>
            prev.map((t) =>
              t.id === task.id
                ? {...t, completed: !t.completed}
                : t
            )
          )
        }
        checked={task.completed}
      />
      <span className="task-text">{task.title}</span>
      <TaskTools setTasks={setTasks} task={task} setChangeableTask={setChangeableTask}/>
    </div>
  );
}

export default Task;
