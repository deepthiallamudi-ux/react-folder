
import{Link} from 'react-router-dom';
import React from 'react';

function About() {
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
            <h1>Welcome to the About Page</h1>
        </div>
        </>
    )
}
export default About;