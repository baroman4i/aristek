import React, { useState, useEffect } from "react";

function AddTask({ tasks, setTasks, changeableTask, setChangeableTask }) {
  const [innerText, setInnerText] = useState("");
  async function AddToDo(text) {
    !tasks.find((t) => t.title === text)
      ? await fetch('https://jsonplaceholder.typicode.com/todos?_limit=1', {
        method: 'POST',
        body: JSON.stringify({
            title: text,
            userId: 4,
            completed: false
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
    }).then(data => (data.ok) ? setTasks((prev) => [
      ...prev,
      {
        userId: 4,
        id: Date.now(),
        title: text,
        completed: false,
      },
    ]) : undefined).catch((e) => console.log(e))
      : alert("this to-do already added");
  }
  async function EditToDo(text) {
    console.log(text);
    await fetch(
      `https://jsonplaceholder.typicode.com/todos/${changeableTask}`,
      {
        method: "PATCH",
        body: JSON.stringify({
          id: changeableTask,
          title: text,
          userId: 1,
          completed: false,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    )
    .then(data => (data.ok) ? setTasks(prev => prev.map(t => t.id === changeableTask ? {...t, title:text} : t)) : undefined)
    .catch((e) => console.log(e))
    setChangeableTask(null)
  }
  useEffect(() => {
      tasks.forEach(task => task.id === changeableTask ? setInnerText(task.title) : null)
  }, [changeableTask])
  return (
    <form className="add-block" onSubmit={e => e.preventDefault()}>
      <input
        value={innerText}
        onChange={(e) => setInnerText(e.target.value)}
        type="text"
        placeholder="+ Add a task, press Enter to save"
      />
      <input
        onClick={() => {
          changeableTask ? EditToDo(innerText) : AddToDo(innerText)
          setInnerText("");
        }}
        type="submit"
        value={changeableTask ? "Save" : "Add"}
      />
    </form>
  );
}

export default AddTask;
