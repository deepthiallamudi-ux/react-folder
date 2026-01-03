import React from "react";
import { useRef } from "react";

export default function UseRef() {
  // Creating ref objects to directly access DOM elements
  // Refs allow us to manipulate DOM elements without causing re-renders
  const inputRef = useRef();  // Reference to first input field
  const inputRef2 = useRef(); // Reference to second input field
  
  // Using useRef to track which input should be focused first
  // Starts with true to focus inputRef2 initially
  const isFirst = useRef(true);

  // Unlike useRef, useState causes re-renders when value changes
  const [text, setText] = React.useState("");
  
  // Using useRef to count something (note: currently decrements on button click)
  // The value persists across re-renders without triggering re-renders
  const Count = useRef(0);
  
  // Important: if we use let here, every re-render will reset focusCount to 0
  // useRef persists the value across re-renders without causing component to re-render
  
  // Handler function that decrements count and logs it
  const handle = () => {
    Count.current--; // Accessing the actual value with .current property
    console.log(`Input focused ${Count.current} times`);
  } 

  // Handler to toggle focus between two input fields
  const handleClick = () => {
    // First, these two lines focus both inputs (second one will win)
    inputRef.current.focus(); // Focus first input
    inputRef2.current.focus(); // Focus second input (overwrites first)

    // Then, conditionally focus based on isFirst flag
    if (!isFirst.current) {
      inputRef.current.focus(); // Focus first input if isFirst is false
    } else {
      inputRef2.current.focus(); // Focus second input if isFirst is true
    }
    
    // Toggle the isFirst flag for next click
    // This alternates which input gets focused on subsequent clicks
    isFirst.current = !isFirst.current;
  };

  return (
    <div>
      {/* First input with ref attached - can be focused programmatically */}
      <input ref={inputRef} type="text" placeholder="Focus me with the button" />
      <button onClick={handleClick} style={{backgroundColor:'blue',color:'orange'}}>Focus Input</button><br></br>
      
      <input ref={inputRef2} type="text" placeholder="Focus me with the button" />
    
      <button onClick={handleClick} style={{backgroundColor:'blue',color:'orange'}}>Focus Input</button> <br></br> 
      <br></br>

      <input ref={inputRef} type="text" placeholder="ToggleFocus" />
      <input ref={inputRef2} type="text" placeholder="toggle" /><br></br>

      <button onClick={handleClick} style={{backgroundColor:'green',color:'red'}}>Toggle Input</button><br></br><br></br><br></br>

      {/* This will cause re-render on every keystroke because it uses useState */}
      <input onChange={(e)=>setText(e.target.value)}/>

      <button onClick={handle} style={{backgroundColor:'purple',color:'yellow'}}>Clear Text</button>
      
      <h3>{text}</h3>
    </div>
  );
}

// useRef is used to access DOM elements directly and to persist values across renders without causing re-renders.in layman terms its like a box that can hold a mutable value in its .current property and it does not cause re render when the value changes.for example we can use useRef to keep track of how many times an input field has been focused without causing re renders.