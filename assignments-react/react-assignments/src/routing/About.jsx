
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
            <Link to="/Todos">Todos</Link>      
            </li>
            </ul>
        </nav>
        <div>
            <h1>This is About Page</h1>
        </div>
        </>
    )
}
export default About;