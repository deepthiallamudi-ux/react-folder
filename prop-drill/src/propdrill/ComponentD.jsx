import React,{useState,useContext} from "react";
import {userContext} from "./ComponentA";


function ComponentD(){
const data=useContext(userContext);
  return (
    <div className="Box">
      <h1>Component D</h1>
      <h2>{`i like the courses from ${data}`}</h2>
    </div>
  );
}

export default ComponentD;