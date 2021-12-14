import React, {useState, useEffect} from 'react';
import './App.scss';
import Header from './components/Header/Header';
import TasksContent from './components/TastsContent/TasksContent';
import Sidebar from './components/Sidebar/Sidebar';
function App() {
  const [tasks, setTasks] = useState([])
  useEffect(() => {
    (async () => {
      await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(data => data.json())
      .then(todos => setTasks(todos))
   })()
  }, []);
  return (
    <div className="tasks">
      <Header tasks={tasks}/>
      <div className="wrapper">
        <Sidebar tasks={tasks}/>
        <TasksContent setTasks={setTasks} tasks={tasks}/>
      </div>
    </div>
  );
}

export default App;
