import { createUserWithEmailAndPassword } from "firebase/auth";
import React,{useState} from 'react';
import { auth } from "../../Firebase/firebaseConfig";

function SignUp() {  
    
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const handleSignUp=async(e)=>{
        e.preventDefault();
        if(!email || !password){
            alert("Please fill all the fields");
            try{
                await createUserWithEmailAndPassword(auth,email,password);
                alert("Sign up successful");
                setEmail("");
                setPassword("");
            }
            catch(error){
              alert(error.message)
        }
    }
}
        
    return (
        <div className='flex justify-center items-center mt-8  h-screen bg-gray-100'>
           
            <form onSubmit={handleSignUp} className="bg-white p-6 rounded shadow-md w-80% flex flex-col gap-4">
                 <h1 className="text-center text-orange-500">Sign Up Page</h1>
                <h2 className="text-2xl font-bold text-center">Sign Up for an account</h2>
                <input class="border p-2 rounded" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input class="border p-2 rounded" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <button type="submit" className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-300">Sign Up</button>
            </form>
        </div>
    )
}

export default SignUp;