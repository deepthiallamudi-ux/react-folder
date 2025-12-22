import React,{useState,useContext,createContext} from "react";
import ComponentB from "./ComponentB";
export const userContext=createContext();

function ComponentA(){
const [data, setData] = useState("Hello from Component A");

  return (
    <div className="Box">
        <h1>Component A</h1>
        <h2>{`it is printing ${data}`}</h2>

      {/* <ComponentB data={data} /> */}

      <userContext.Provider value={data}>
        <ComponentB />
      </userContext.Provider>
    </div>
  );
}

export default ComponentA;

// prop drilling is the process of passing data from a higher-level component to a lower-level component through intermediate components that do not need the data themselves.
// In this example, ComponentA passes data to ComponentB, which then passes it to ComponentC, and finally to ComponentD, where it is used.
// useContext and Redux are alternatives to prop drilling for managing state in React applications.
// use context is used to share data across multiple components without passing props through every level of the component tree.