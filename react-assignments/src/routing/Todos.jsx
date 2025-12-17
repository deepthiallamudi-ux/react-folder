
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Todos() {
    // State to store the fetched todos data
    // useState([]) creates a state variable 'todos' initialized as empty array
    // When setTodos() is called, React will re-render the component to show updated data
    const [todos, setTodos] = useState([]);
    
    // State to track loading status
    // useState(true) starts loading as true (show loading message)
    // When setLoading(false) is called, React will re-render to hide loading and show todos
    const [loading, setLoading] = useState(true);

    // useEffect runs after component mounts (first render)
    // It's used here to fetch data from API when component loads
    useEffect(() => {
        // Fetch todos from JSONPlaceholder API
        fetch('https://jsonplaceholder.typicode.com/todos')
            // Convert response to JSON format
            .then(response => response.json())
            .then(data => {
                // Get only first 10 todos from the array
                // setTodos() updates the todos state and triggers re-render
                setTodos(data.slice(0, 10));
                // setLoading(false) updates loading state and triggers re-render to hide loading
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching todos:', error);
                // Even if error occurs, stop showing loading
                setLoading(false);
            });
    }, []); // Empty dependency array means this effect runs only once when component mounts

    return (
        <>
            {/* Navigation links */}
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/todos">Todos</Link>
                    </li>
                </ul>
            </nav>
            
            <h1>Todos List (First 10)</h1>
            
            {/* Conditional rendering based on loading state */}
            {loading ? (
                // Show loading message while data is being fetched
                <p>Loading todos...</p>
            ) : (
                // Once loading is false, map through todos array and display them
                // Each todo is rendered as a card with title and completion status
                todos.map((todo) => (
                    <div key={todo.id}>
                        <h3>{todo.title}</h3>
                        <p>Status: {todo.completed ? 'Completed' : 'Not Completed'}</p>
                    </div>
                ))
            )}
        </>
    );
}

export default Todos;