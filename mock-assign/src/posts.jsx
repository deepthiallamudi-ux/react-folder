import React,{useState,useEffect, useContext} from "react";

function Posts({ theme, toggleTheme }) {
const [posts, setPosts] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        setPosts(data.slice(0,20));
        setLoading(false);
    });
}, []);
if(loading){
    return <div>Loading...</div>;
}
if(error){
    return <div>Error: {error.message}</div>;
}

const edit = () => {
    alert("Edit button clicked");
}

const deletePost = () => {
    alert("Delete button clicked");
}

    return(
        <div className="posts-container">
            <div className="posts-header">
                <h2>Posts Component</h2>
                <p>This is the Posts component content.</p>
                <button className="theme-toggle-btn" onClick={toggleTheme}>
                    {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
                </button>
            </div>
             
            <div className="posts-grid">
                {posts.map(post => (
                    <div key={post.id} className="post-card">
                        <h3 className="post-title">{post.title}</h3>
                        <p className="post-body">{post.body}</p>
                        <div className="post-actions">
                            <button className="btn btn-edit" onClick={edit}>Edit</button>
                            <button className="btn btn-delete" onClick={deletePost}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Posts;