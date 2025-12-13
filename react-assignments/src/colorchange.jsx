import React, {useState} from 'react'

export default function Colorchange() {
 const[color,setColor]=useState("red");

 const changeColor=()=>{
 setColor(color==="red"?"blue":"red");

 }
  return (
    <>
    <div style={{backgroundColor: color, color: "white", padding: "10px"}}>color change using useState</div>
    <button onClick={changeColor}>Change Color</button>
    </>
  )
}
