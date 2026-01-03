import React,{useState} from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const [error,setError]=useState(false);
    const navigate=useNavigate();
const handleLogin=(e)=>{
    e.preventDefault()
    if(email==="admin@gmail.com" && password==="admin1234"){
        localStorage.setItem("role","admin");
        alert("Login Successful! Redirecting to Admin Dashboard...");
        navigate("/admin/dashboard");
    }
    else if(email==="customer@gmail.com" && password==="customer1234"){
        localStorage.setItem("role","customer");
        alert("Login Successful! Redirecting to Customer Dashboard...");
        navigate("/customer/dashboard");
    }
    else{
        alert("Invalid Email or Password! Please try again.");
    }
    
}
  return (
    <div className="container">
    <div className="login-page">
      <h2>Login Page</h2>
   <input type="email" placeholder="enter email" value={email} onChange={(e)=>setEmail(e.target.value)} />
   <br></br>
   <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} /><br></br>
    <button className="login-button" onClick={handleLogin}>Login</button>
    </div>
    </div>
  );
}
export default LoginPage;