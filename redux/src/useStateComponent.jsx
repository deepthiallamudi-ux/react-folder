
 import { useState,useReducer } from "react";

 const initialState={
  loading:false,
  success:false,
  error:""
  
 };
  function reducer(state,action){

    switch(action.type){
      case "LOGIN":
        return {loading:true,success:true,error:""};
      case "SUCCESS":
        return {loading:false,success:true,error:""};
      case "FAIL":
        return {loading:false,success:false,error:"wrong username or password"};  
      default:
        //If action type is anything else → returns current state unchanged
        return state;
      }

  }


export const UseStateComponent = ()=>{


  // Step 1: create states
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // useReducer
  const [state,dispatch]=useReducer(reducer,initialState);  //syntax  3states

  
  // Step 2: login function
  function handleLogin() {
    dispatch({type:"LOGIN"});
           
    
    // fake login check
    setTimeout(() => {
      if (username === "admin" && password === "1234") {
        dispatch({type:"SUCCESS"});
          } else {
            dispatch({type:"FAIL"})
         }
    }, 1000);
  }

  // Step 3: UI
  return (
    <div style={{ width: "300px", margin: "50px auto" }}>
      <h3>Login</h3>

      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <br /><br />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <br /><br />

      <button onClick={handleLogin}>Login</button>   

      <br /><br />

      {state.loading && <p>Loading...</p>}
      {state.success && <p>Login Successful ✅</p>}
      {state.error && <p style={{ color: "red" }}>{state.error}</p>}
    </div>
  );
}

// use Reducer is used whenever there are multiple states which are related to one another. It helps to manage complex state logic in a more organized way.it means instead of having multiple useState calls, we can use a single useReducer to handle all related states together.
// In this example, we have three states: loading, success, and error. These states are related to the login process. Using useReducer allows us to manage these states in a more structured way by defining actions (LOGIN, SUCCESS, FAIL) and updating the state based on these actions. This approach makes the code cleaner and easier to maintain, especially as the complexity of state management increases.

// dispatch is a function provided by the useReducer hook that allows us to send actions to the reducer function. When we call dispatch with an action object, it triggers the reducer function to process that action and update the state accordingly. The action object typically contains a type property that indicates the type of action being performed, and it may also include additional data needed for the state update.

