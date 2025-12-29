import React,{useState, useMemo} from "react";
function Count() {
    const [count1,setCount1]=useState(0);
    const[count2,setCount2]=useState(0);

    const increment1=()=>{
        setCount1(count1+1);
    }
    const increment2=()=>{
        setCount2(count2+1);
    }

const isEven=useMemo(() => {
      let i=0;
        while(i<10000000){
            i++;
        }
        return count1%2===0;
},[count1])

     return(
        <div>
            
            <button onClick={increment1}>Increment count1-{count1}</button><br></br>
            <span>{isEven?"Even":"Odd"}</span><br></br>
            <button onClick={increment2}>Increment count2-{count2}</button>
         </div>
        );
}
export default Count;

// useMemo is a React hook that optimizes performance by memoizing the result of a function, preventing unnecessary recalculations when dependencies haven't changed.
// it is used to optimize performance by caching the result of a computation and only recalculating it when its dependencies change.