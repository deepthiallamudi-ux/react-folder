
import React from "react";
import {Link} from "react-router-dom";

function Home() {
   return(
    <>
    <nav>
        <ul> 
            <li>   
        <Link to="/">Home</Link>
        </li>
        <li>
        <Link to="/about">About</Link>      
        </li>
        <li>
        <Link to="/login">Login</Link>  
         </li>
                     <li>
                       <Link to="/user">User</Link>       
                     </li>
        </ul>
    </nav>
       <div>
           <h1>Welcome to the Home Page</h1>
       </div>
       </>
   ) 
}
export default Home;