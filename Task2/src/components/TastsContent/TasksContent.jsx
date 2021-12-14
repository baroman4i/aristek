import React, {useState} from "react";
import ActiveTasks from "../ActiveTasks/ActiveTasks";
import AddTask from "../AddTask/AddTask";
import CompletedTasks from "../CompletedTasks/CompletedTasks";
function TasksContent({ tasks, setTasks }) {
  const [changeableTask, setChangeableTask] = useState(null)
  return (
    <div className="content-container">
      <div className="wrap">
      <AddTask 
        setTasks={setTasks} 
        tasks={tasks} 
        changeableTask={changeableTask}
        setChangeableTask={setChangeableTask}
      />
      
      <ActiveTasks
        setTasks={setTasks}
        tasks={tasks.filter((t) => !t.completed)}
        setChangeableTask={setChangeableTask}
      />
      </div>
      <CompletedTasks
        setTasks={setTasks}
        tasks={tasks.filter((t) => t.completed)}
      />
    </div>
  );
}

export default TasksContent;
