import { useReducer } from 'react';

const initialState = 0;

function ReducerEg (state, action) {

    if(action==="INCREMENT"){
        return state+1;
    }
     if(action==="DECREMENT"){
        return state-1;
    }
    if (action==="RESET"){
        return 0;
    }
        return state;
    }
function Counter() {
    const[count, dispatch]=useReducer(ReducerEg,initialState);

    return ( 
        <div style={{textAlign:"center"}}>
            <h1>Counter using useReducer</h1>
            <h2>{count}</h2>
            <button onClick={()=>dispatch("INCREMENT")}>Increment</button>
            <button onClick={()=>dispatch("DECREMENT")}>Decrement</button>
            <button onClick={()=>dispatch("RESET")}>Reset</button>
        </div>
     );
}
export default Counter;