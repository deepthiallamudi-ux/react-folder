import React from "react";
import { useRef } from "react";

export default function UseRef() {
  const inputRef = useRef();
  const inputRef2 = useRef();
  const isFirst=useRef(true);

  const [text,setText]=React.useState("");
  
  
  const Count=useRef(0);
//   let focusCount=0; if we use let here every re render will reset focusCount to 0 so we use useRef
    const handle=()=>{
    Count.current--;
    console.log(`Input focused ${Count.current} times`);
  } 

  const handleClick = () => {
    inputRef.current.focus();
    inputRef2.current.focus();

    if(!isFirst.current){
        inputRef.current.focus();
    }
    else{
        inputRef2.current.focus();
    }
    isFirst.current = !isFirst.current;
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Focus me with the button" />
      <button onClick={handleClick} style={{backgroundColor:'blue',color:'orange'}}>Focus Input</button><br></br>
      {/* 2nd textinput focuses even when clicking 1st button beacause */}

       <input ref={inputRef2} type="text" placeholder="Focus me with the button" />
      <button onClick={handleClick} style={{backgroundColor:'blue',color:'orange'}}>Focus Input</button> <br></br> 
      <br></br>

      <input ref={inputRef} type="text" placeholder="ToggleFocus" />
      <input ref={inputRef2} type="text" placeholder="toggle" /><br></br>
      <button onClick={handleClick} style={{backgroundColor:'green',color:'red'}}>Toggle Input</button><br></br><br></br><br></br>

      <input onChange={(e)=>setText(e.target.value)}/>
      <button onClick={handle} style={{backgroundColor:'purple',color:'yellow'}}>Clear Text</button>
      <h3>{text}</h3>
    </div>
  );
}