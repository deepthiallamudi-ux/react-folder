
import React, { useState } from 'react';
import Title from './title.jsx';
import Count from './count.jsx';
import Button from './Button.jsx';
import { useCallback } from 'react';


function ParentComponent() {

const [salary, setSalary] = useState(10000);
const [age, setAge] = useState(25);

const incrementAge= useCallback(() => {
    setAge(age + 1);
}, [age]);

// const incrementAge = () => {
//         setAge(age + 1);
//     }

    // const incrementSalary = () => {
    //     setSalary(salary + 1000);
    // }
const incrementSalary= useCallback(() => {
    setSalary(salary + 1000);
}, [salary]);

  return (
    <div>
      <h2>Parent Component</h2>
      {/* Other content of the ParentComponent */}
      <Title />
        <Count  text ="Age" count={age} />
        <Button handleClick={incrementAge}>Increment Age</Button>
        <Count  text ="Salary" count={salary} />
        <Button handleClick={incrementSalary}>Increment Salary</Button>
    </div>
  );
}   
export default ParentComponent;


