import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './login.jsx';
import Home from './home.jsx';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;

//controlled one input  means the value of the input is controlled by react state.
// uncontrolled input means the value of the input is controlled by the DOM itself.CDSCFDDDDDDDDDDDDDDX
//  if multiple input fields are there then we can use single state object to manage all the input fields. for example, const [formData, setFormData]=useState({username:'', password:''}); and then we can update the state using setFormData({...formData, username:e.target.value}) for username field and setFormData({...formData, password:e.target.value}) for password field.
