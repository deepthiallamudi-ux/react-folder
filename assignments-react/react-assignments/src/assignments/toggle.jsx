import React from "react";
import { useState } from "react";


function Toggle() {
const[isToggled,setIsToggled]=useState(false);

    const handleToggle = () => {
        setIsToggled(!isToggled);
        console.log("Toggled!");
    }
    const ComponentA = () => <h3>Status is false</h3>;
    const ComponentB = () => <h3>Status is true</h3>;
    return(
        <>
        <h3>Status: {isToggled ? <ComponentA/> : <ComponentB />}</h3>
        <button onClick={handleToggle}>Toggle Button</button>
        </>
    );
}
export default Toggle;
