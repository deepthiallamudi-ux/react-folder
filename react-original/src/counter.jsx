import React from 'react';
import { useState } from 'react';

function counter(){
const [count,setCount]=useState (0);

const increment = () => {
    setCount(count+1);
    }
    return(
        <div>
            <h1>Counter App</h1>
            <h3>Count: {count}</h3>
            <button onClick={increment}>Increment</button>
        </div>
    );
}
export default counter;