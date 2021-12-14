import React from "react";

function TaskTools({ task, setTasks, setChangeableTask }) {
  const copyText = () => navigator.clipboard.writeText(task.title);
  const delTask = async () =>
    await fetch(`https://jsonplaceholder.typicode.com/todos/${task.id}`, {
      method: "DELETE"
    })
      .then((data) =>
        (data.ok)
          ? setTasks((prev) => prev.filter((t) => t.id !== task.id))
          : undefined
      )
      .catch((e) => console.log(e));
  return (
    <div className="task-tools">
      {!task.completed ? (
        <>
          <img
            src="./img/edit.png"
            alt="edit"
            className="tool"
            onClick={() => setChangeableTask(task.id)}
          />
          <img
            src="./img/copy.png"
            alt="copy"
            className="tool"
            onClick={() => copyText()}
          />
          <img
            src="./img/delete.png"
            alt="delete"
            className="tool"
            onClick={() => delTask()}
          />
        </>
      ) : (
        <img
          src="./img/delete.png"
          alt="delete"
          className="tool"
          onClick={() => delTask()}
        />
      )}
    </div>
  );
}

export default TaskTools;
