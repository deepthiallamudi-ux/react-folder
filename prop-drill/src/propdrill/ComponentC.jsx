import React,{useState} from "react";
import ComponentD from "./ComponentD.jsx";

function ComponentC(){

  return (
    <div className="Box">
      <h1>Component C</h1>
        <ComponentD />
    </div>
  );
}

export default ComponentC;