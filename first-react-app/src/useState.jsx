import React,{useState} from "react";
function useState() {
  const [name, setName] = useState("my daughter");
  const [age, setAge] = useState(5);
  const [isEmployee, setIsEmployee] = useState(false);
  const [count,setCount]=useState (0);
 const udateName = () => {
    // name="vagdevi";
    setName("Vagdevi");
    console.log(name);
  }
  const increment = () => {
// age = age + 1;
setAge(age+1);
  }
    const toggleIsEmployee = () => {
        setIsEmployee(!isEmployee);
    }
    const counter = () => {
    setCount(count+1);
    }
    const decrement = () => {
    setCount(count-1);
    }
    return (
        <div>
            <h1>Components in React</h1>
            <p>Component is a reusable piece of code that represents a part of the user interface.</p>
            <button onClick={udateName}>Update Name</button>
            <h2>name:{name}</h2>
            <p>age:{age}</p>
            <button onClick={increment}>Update Age</button>
            <p>is employee:{isEmployee?"yes":"NO"}</p>
            <button onClick={toggleIsEmployee}>Toggle Employee Status</button>
            <p>count:{count}</p>
            <button onClick={counter}>Counter</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
}       
export default useState;