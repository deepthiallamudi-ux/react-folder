
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate();
  return (
    <div>
        <h2>Login</h2>
        <button onClick={()=>{
            localStorage.setItem("isloggedin","true");
            navigate("/dashboard");
        }}>Login</button>
        
        
        
        </div>
  )
}
