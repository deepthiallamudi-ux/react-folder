import React,{useState} from "react";
import ComponentC from "./ComponentC";

function ComponentB(){

  return (
    <div className="Box">
        <h1>Component B</h1>
        <ComponentC />
    </div>
  );
}

export default ComponentB;