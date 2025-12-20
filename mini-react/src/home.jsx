import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  
  const logoutHandle = () => {
    navigate("/");
  }

  return (
   
    <div style={styles.container}>
        <div style={styles.card}>
            <h2>Welcome to the Home Page!</h2>
            <button style={styles.button} onClick={logoutHandle}>Click Me</button>
        </div>
    </div>
  )
}

const styles = {
    container: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    card:{
        width: '300px',
        padding: '20px',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
        borderRadius: '8px',
        backgroundColor: '#fff',
    },
    button: {
        width: "100%",
        padding: '10px',
        backgroundColor: '#ef8446ff',
        color: '#43aa75ff',
        border: 'none',
        cursor: 'pointer',
        borderRadius: '4px'
    },
};




export default Home;


