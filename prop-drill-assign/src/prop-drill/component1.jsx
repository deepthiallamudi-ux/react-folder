import React from 'react';
import Component2 from './component2.jsx';

function Component1() {
  const props = {
    a: "Apple",
    b: "Banana", 
    c: "Cherry",
    d: "Dragon Fruit",
    e: "Elderberry",
    f: "Fig"
  };

  return (
    <div>
      <Component2 {...props} />
    </div>
  );
}

export default Component1;