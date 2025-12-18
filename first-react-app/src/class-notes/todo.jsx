
import React from "react";

function Todo() {

    const [tasks, setTasks] = React.useState(["tea", "coffee", "milk"]);
    const [newTask, setNewTask] = React.useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value);
        console.log("Input changed!");
        }

        function addTask() {
            console.log("Task added!");
            }

        function removeTask(index) {
                console.log("Task removed!");
                }
  return(
    <>
    <div className="todo-app">
      <h1>Todo List</h1>
      <input type="text" placeholder="Enter a task"  value={newTask} onChange={handleInputChange} />
      <button onClick={addTask}>Add Task</button>
      <button onClick={removeTask}>Remove Task</button>
      <ul>
        <li>Learn React</li>
        <li>Build a React App</li>
        <li>Deploy the App</li>
      </ul>
    </div>
    <ol>
        {tasks.map((task, index) => (
            <li key={index}>{task}
            </li>
        ))}
    </ol>
    </>
  );
}
export default Todo;