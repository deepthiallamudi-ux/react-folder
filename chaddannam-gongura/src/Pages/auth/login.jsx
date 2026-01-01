import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../Firebase/firebaseConfig';

function  Login() {
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const navigate=useNavigate();
    const handleLogin=async(e)=>{
        e.preventDefault();
        if(!email || !password){
            alert("Please fill all the fields");
            try{
                await signInWithEmailAndPassword(auth,email,password);
                alert("Login successful");
                navigate("/chefSide");
            }
            catch(error){
              alert(error.message)
        }
    }
}
    return (
        <div className='flex justify-center items-center mt-8  h-screen bg-gray-100'>
            <h1>Login Page</h1>
            <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow-md w-full flex flex-col gap-4">
                <h2 className="text-2xl font-bold text-center">Login to your account</h2>
                <input class="border p-2 rounded" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input class="border p-2 rounded" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <button type="submit" className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-300">Login</button>
            </form>
        </div>
    )
}

export default Login;