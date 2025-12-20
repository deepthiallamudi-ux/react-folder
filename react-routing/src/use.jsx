import React from "react";
import { Link , useParams} from "react-router-dom";
function User() {
    const {id}=useParams();
    // useParams is a hook provided by react-router-dom that allows you to access the parameters of the current route. In this case, we are using it to extract the id parameter from the URL.
    return (
        <div>
            <nav>
    <ul>
        <li>
            <Link to='user/1'>User 1</Link>
            <Link to='user/2'>User 2</Link>
                   <Link to='user/3'>User 3</Link>
        </li>
    </ul>
            </nav>
            <h2>Welcome to User Page</h2>
            <h3>User ID: {id}</h3>
        </div>
    )
    }
    export default User;