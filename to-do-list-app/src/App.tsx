import { useState } from "react";
import TasksList from "./TasksList.tsx";
import TaskInterface from "./TaskInterface.ts";
import './index.css';

function App() {

  const [userInput, setUserInput] = useState<string>("");
  const [tasksList, setTasksList] = useState<Array<TaskInterface>>([]);

  const addTask = () => {
    if(userInput.trim() !== "") {
      // Initialize task with users description and unchecked status
      setTasksList((prevTasks) => [...prevTasks, {task: userInput, isChecked: false}]);
      setUserInput("");
    }
  }
  
  return(
    <div className="container">
      <label className="instruction">Add your tasks here:</label><br/>
      <input className="user-input" type="text" onChange={(e) => setUserInput(e.target.value)} value={userInput}/>
      <button className="submit-btn" onClick={addTask}>Create task</button>
      <TasksList tasks={tasksList}
                 setTasks={setTasksList}/>
    </div>
  );
}

export default App
