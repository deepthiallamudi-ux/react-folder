import React from "react";
import {useState} from "react"; 
import {useNavigate} from "react-router-dom";

    const Login=()=>{
      const[email,setEmail]=React.useState("");
      const[password,setPassword]=React.useState("");
      const[error,setError]=React.useState("");
      const navigate=useNavigate();


      const loginHandler=()=>{
        if(email==="admin@gmail.com" && password==="admin"){
          alert("Logged in Successfully");
          localStorage.setItem("isloggedin",true);
          navigate("/todos");
        }
        else{
          alert("Invalid Credentials");
        }
    }

    return (
        <div style={{display:"flex", flexDirection:"column", width:"200px", margin:"auto", marginTop:"100px"}}>
            <h3>Login Page</h3>
            <input type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/><br/>
            <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/><br/>
            <button onClick={loginHandler}>Login</button>
            {
                error && <p style={{color:"red", fontSize:"12px"}}>{error}</p>
            }
        </div>
    );
}

export default Login;