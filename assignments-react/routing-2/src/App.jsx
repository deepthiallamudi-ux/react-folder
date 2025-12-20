import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./home";
import Login from "./login";
import Todos from "./todos";
import ProtectedRoute from "./protectedRoute.jsx";
import TodoDetails from "./todoDetails.jsx";

function App() { 
  
  return (
     <div>
       <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/todos" element={
           <ProtectedRoute>
            <Todos/>
          </ProtectedRoute>
        }/>

        <Route path='/todos/:todoId' element={
          <ProtectedRoute>
            <TodoDetails/>
          </ProtectedRoute>
        }/>
     </Routes>

     
        
     </BrowserRouter>
</div>

  );      
}

        export default App;
        