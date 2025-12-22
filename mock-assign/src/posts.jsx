import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function Posts(props) {
  const theme = props.theme;
  const toggleTheme = props.toggleTheme;

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [editingPost, setEditingPost] = useState(0);
  const [editTitle, setEditTitle] = useState('');
  const [editBody, setEditBody] = useState('');

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

  if (error.length > 0) {
    return <div>Error: {error}</div>;
  }

  function startEdit(post) {
    setEditingPost(post.id);
    setEditTitle(post.title);
    setEditBody(post.body);
  }

  function cancelEdit() {
    setEditingPost(0);
    setEditTitle('');
    setEditBody('');
  }

  function saveEdit(postId) {
    const updatedPosts = posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          title: editTitle,
          body: editBody
        };
      }
      return post;
    });
    
    setPosts(updatedPosts);
    setEditingPost(0);
    setEditTitle('');
    setEditBody('');
  }

  function deletePost(postId) {
    if (window.confirm('Are you sure you want to delete this post?')) {
      const filteredPosts = posts.filter(post => post.id !== postId);
      setPosts(filteredPosts);
    }
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
              {editingPost === post.id ? (
                <div className="edit-form">
                  <input
                    type="text"
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                    className="edit-title-input"
                    placeholder="Post title"
                  />
                  <textarea
                    value={editBody}
                    onChange={(e) => setEditBody(e.target.value)}
                    className="edit-body-textarea"
                    placeholder="Post body"
                    rows="4"
                  />
                 
                </div>
              ) : (
                <>
                  <h3 className="post-title">{post.title}</h3>
                  <p className="post-body">{post.body}</p>
                  <div className="post-actions">
                    <button className="btn btn-edit" onClick={() => startEdit(post)}>
                      Edit
                    </button>
                    <button className="btn btn-delete" onClick={() => deletePost(post.id)}>
                      Delete
                    </button>
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Posts;