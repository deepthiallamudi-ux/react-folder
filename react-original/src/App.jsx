import React, { Component } from 'react';
import Counter from './counter.jsx';
import FirstComponent from './FirstComponent.jsx';
import ComponentA from './propdrill/ComponentA.jsx';

function App() {
  return (
    <div>
    {/* <Counter/>
    <FirstComponent/>  */}
    <ComponentA/>
    </div>  
  );
}

export default App;   