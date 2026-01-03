import React,{useState, useNavigate} from "react";

function LoginPage() {
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const [error,setError]=useState(false);
    const navigate=useNavigate();
const handleLogin=(e)=>{
    e.preventDefault()
    if(email==="admin@gmail.com" && password==="admin1234"){
        localStorage.setItem("role","admin");
        alert("Login Successful");
        navigate("/admin/dashboard");
    }
    else if(email==="customer@gmail.com" && password==="customer1234"){
        localStorage.setItem("role","customer");
        alert("Login Successful");
        navigate("/customer/dashboard");
    }
    else{
        alert("Invalid Credentials");
    }
    
}
  return (
    <div className="login-page">
      <h2>Login Page</h2>
   <div> <input type="email" placeholder="enter email" /><br></br></div>
   <div> <input type="password" placeholder="Password" /><br></br></div>
    <button onClick={handleLogin}>Login</button>
    </div>
  );
}
export default LoginPage;