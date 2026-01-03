import {Navigate} from 'react-router-dom';
import React from 'react';
function ProtectedRoute({childern,role}) {
    const User=localStorage.getItem("role");
    if(!User){
        navigate("/")
    }
    else if(User && User!==role){
        navigate("/")
    }
    return childern;
}
export default ProtectedRoute;