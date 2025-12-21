import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function Posts(props) {
  const theme = props.theme;
  const toggleTheme = props.toggleTheme;

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        const first20Posts = data.slice(0, 20);
        setPosts(first20Posts);
        setLoading(false);
      });
  }, []);

  if (loading === true) {
    return <div>Loading...</div>;
  }

  if (error !== null) {
    return <div>Error: {error.message}</div>;
  }

  function edit() {
    alert("Edit button clicked");
  }

  function deletePost() {
    alert("Delete button clicked");
  }

  let buttonText = '';
  if (theme === 'light') {
    buttonText = '🌙 Dark Mode';
  } else {
    buttonText = '☀️ Light Mode';
  }

  return (
    <div className="posts-container">
      <div className="posts-header">
        <h2>Posts Component</h2>
        <button className="theme-toggle-btn" onClick={toggleTheme}>
          {buttonText}
        </button>
      </div>
      <div className="posts-grid">
        {posts.map(function(post) {
          return (
            <div key={post.id} className="post-card">
              <h3 className="post-title">{post.title}</h3>
              <p className="post-body">{post.body}</p>
              <div className="post-actions">
                <button className="btn btn-edit" onClick={edit}>Edit</button>
                <button className="btn btn-delete" onClick={deletePost}>Delete</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Posts;