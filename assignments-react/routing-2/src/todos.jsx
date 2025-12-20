import React from "react";
import {Link, useNavigate} from "react-router-dom";
import {useState, useEffect} from "react";
function Todos() {
    const [todos, setTodos] =useState([]);
    const navigate=useNavigate();

     const logoutHandler=()=>{
            localStorage.removeItem("isloggedin");
            navigate("/login");
        }

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
          .then((response) => response.json())
          .then((data) => setTodos(data.slice(0, 10)))
          .catch((error) => console.error("Error fetching todos:", error));
      }
        , []);

       
    return (
<div>
    <h1>Todos Page - Protected Route</h1>
    <button onClick={logoutHandler}>Logout</button>
    <div>
        {todos.map((todo) => (
           <div key={todo.id}>{todo.title}</div>
        ))}
    </div>
</div>
    )
}

export default Todos;