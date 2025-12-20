import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login(){
    const [username, setUsername] =useState('');
    const [password, setPassword] =useState('');
   const  navigate=useNavigate();
   const [error, setError]=useState('');
    const  loginHandle=()=>{
        //check if username and password are not empty
        if(username === 'admin' || password === '123456'){
            navigate("/home")
        }
        else{
            setError('Invalid username or password');
        
        }
    }
    return (
<div style={styles.container}>
    <div style={styles.card}>
        <h2 style={styles.title}>Login</h2>
        <input type="text" placeholder="Username" style={styles.input} value={username} onChange={(e)=>setUsername(e.target.value)}/>
        <input type="password" placeholder="Password" style={styles.input} value={password} onChange={(e)=>setPassword(e.target.value)} />
        <button style={styles.button} onClick={loginHandle}>Submit</button>
        {error && <p style={styles.error}>{error}</p>}
        <p style={styles.hint}>Hint: Username: admin | Password: 123456</p>
    </div>
</div>
    )
}
 
const styles = {
    container: {
        width: '100%',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#524f7cff',
    },
    card:{
        width: '300px',
        padding: '20px',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
        borderRadius: '8px',
        backgroundColor: '#7fcac6ff',
    },
    title:{
        marginBottom: '20px',
    },
    input: {
        width: "80%",
        marginBottom: '10px',
        padding: '8px',
        borderRadius: '4px',
        border: '1px solid #ccc',
    },
    button: {
        width: "100%",
        padding: '10px',
        borderRadius: '4px',
        backgroundColor: '#a6591eff',
        color: '#fff',
        border: 'none',
        cursor: 'pointer',
        borderRadius: '4px'
    },
    error:{
        color: 'red',
        marginBottom: '10px',

    },
    hint:{
        marginTop: '10px',
        fontSize: '12px',
        color: '#05370aff',
    }
};

export default Login;