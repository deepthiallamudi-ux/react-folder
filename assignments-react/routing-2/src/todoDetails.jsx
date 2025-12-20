import React ,{useState, useEffect, use}from 'react'
import { useParams } from 'react-router-dom';


export default function TodoDetails() {
    const { todoId } = useParams();

    const [todo, setTodo] = useState(null);

    useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
      .then((response) => response.json())
      .then((data) => setTodo(data))
      .catch((error) => console.error("Error fetching todo details:", error));
    }, [todoId]);

    if (!todo) {
    return <div>Loading...</div>;
  }
  return (
    <div className='card'>
        <h1>Todo Details</h1>
            <div>
                <p>ID: {todo.id}</p>
                <p>Title: {todo.title}</p>
                <p>Completed: {todo.completed ? "Yes" : "No"}</p>
            </div>
    </div>
  )
}
