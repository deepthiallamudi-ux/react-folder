/*use effect hook allows you to perform side effects in function components
It serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount in React classes. it is used when you want to run some code based on changes to state or props
By using this hook, you can tell React that your component needs to do something after rendering
mount means when the component is added to the DOM
unmount means when the component is removed from the DOM
use effect is used in 3 main ways
1. to run side effects after every render(re-render of the component)
2. to run side effects only once after the initial render(state: mounting, starting)
3. to run side effects based on specific state or prop changes(mounting and updating)
useEffect take 3 types of arguments:
1.anonymous function
2.anonymous function and empty array
3.Callback function with dependencies array with values
Syntax: useEffect(() => { //code to run I.E function }, [dependencies]);
1. useEffect(() => { }); - runs after every render
2. useEffect(() => { }, []); - runs only once after the initial render i.e on mounting runs only once
3. useEffect(() => { }, [dependency1, dependency2]); - runs on mounting + when any of the dependencies change
uses:DOM manipulation, data fetching, Event listeners, timers, logging, and more*/


import React from "react";
import { useState } from "react";
import { useEffect } from "react";


function UseEffects() {
const [count, setCount] = useState(0);

useEffect(()=>{      
    if(count%2==0)
        {
        alert("Count is even");
        document.title=`${count} is even`;
        }
});

useEffect(()=>{      
        document.title=`${count} is updated`;
        }, [count]);

return(<div>
    <h1>Count: {count}</h1>
    <button onClick={() => setCount(count + 1)}>Increment</button>
    <button onClick={() => setCount(count - 1)}>Decrement</button> 
</div>)
}
export default UseEffects;


//component lifecycle in useEffect
//1. Mounting: when the component is added to the DOM
//2. Updating: when the component is re-rendered due to state or prop changes
//3. Unmounting: when the component is removed from the DOM